import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AddressInput = () => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const fetchAddresses = (query) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const newTimeout = setTimeout(() => {
      if (query.length > 2) {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=BR&q=${query}`)
          .then(response => response.json())
          .then(data => {
            setSuggestions(data);
          });
      } else {
        setSuggestions([]);
      }
    }, 1000);

    setDebounceTimeout(newTimeout);
  };

  const selectAddress = (item) => {
    setAddress(item.display_name);
    setLatitude(item.lat);
    setLongitude(item.lon);
    setSuggestions([]);
  };

  return (
    <LinearGradient colors={['#DE302F', 'rgba(222, 48, 47, 0)']} style={styles.gradientContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite o endereço"
          onChangeText={(text) => {
            setAddress(text);
            fetchAddresses(text);
          }}
          value={address}
        />
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.place_id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => selectAddress(item)}
                style={styles.suggestion}
              >
                <Text style={styles.suggestionText}>{item.display_name}</Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
        {latitude && longitude ? (
          <Text style={styles.coordinates}>Latitude: {latitude}, Longitude: {longitude}</Text>
        ) : null}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    gradientContainer: {
        borderRadius: 10,
        padding: 12,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        maxHeight: 300, // Altura máxima fixa
      },
      container: {
        backgroundColor: 'white',
        borderRadius: 5,
        flex: 1,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      input: {
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
      },
      scrollView: {
        maxHeight: 200, 
      },
      suggestion: {
        padding: 12,
        marginBottom: 5,
        borderRadius: 5,
      },
      suggestionText: {
        color: '#333',
      },
      coordinates: {
        marginTop: 10,
        color: '#666',
      },
});

export default AddressInput;
