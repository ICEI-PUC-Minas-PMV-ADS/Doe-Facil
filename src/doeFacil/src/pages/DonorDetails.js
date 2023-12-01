import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';  
import Title from "../components/Title.js";

const DonorDetails = ({ route, navigation }) => {
  const { donor } = route.params; 

  return (
    <ScrollView style={styles.container}>
        <Title title="Detalhes do Doador" navigation={navigation} />

      <View style={styles.centerContent}>
        <MaterialIcons name="person" size={60} color="#DE302F" />
        <Text style={styles.donorName}>{donor.user.firstName} {donor.user.lastName}</Text>
        <Text style={styles.donorInfo}>Tipo de Sangue: {donor.bloodType}</Text>
        <Text style={styles.donorInfo}>Hospital: {donor.location.locationName}</Text>
        <Text style={styles.donorAddress}>
          {donor.address.street}, {donor.address.number}, {donor.address.neighborhood}, {donor.address.city}, {donor.address.state}
        </Text>
      </View>

      <View style={styles.instructionContainer}>
        <Text style={styles.instruction}>
          Para doar, dirija-se ao hospital indicado e informe que deseja doar sangue para {donor.user.firstName} {donor.user.lastName}.
        </Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  donorName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  donorInfo: {
    fontSize: 16,
    marginBottom: 4,
  },
  donorAddress: {
    fontSize: 14,
    color: 'grey',
    marginTop: 8,
  },
  instructionContainer: {
    backgroundColor: '#DE302F',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  instruction: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});

export default DonorDetails;
