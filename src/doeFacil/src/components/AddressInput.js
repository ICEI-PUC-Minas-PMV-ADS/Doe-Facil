import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
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
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.place_id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => selectAddress(item)}
              style={styles.suggestion}
            >
              <Text>{item.display_name}</Text>
            </TouchableOpacity>
          )}
        />
        {latitude && longitude ? (
          <Text>Latitude: {latitude}, Longitude: {longitude}</Text>
        ) : null}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    gradientContainer: {
        borderRadius: 10,
        padding: 10,
        flex: 1 // Faz com que o contêiner ocupe todo o espaço disponível
      },
      container: {
        borderWidth: 1,
        borderColor: 'transparent',
        padding: 15, // Aumento no padding
        borderRadius: 5,
        flex: 1 // Faz com que o contêiner ocupe todo o espaço disponível
      },
      input: {
        backgroundColor: 'white',
        padding: 12, // Aumento no padding
        borderRadius: 5,
        marginBottom: 10,
      },
      suggestion: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 12, // Aumento no padding
        marginBottom: 5,
        borderRadius: 5,
      },
});

export default AddressInput;
