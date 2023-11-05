import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import CustomDropdown from './CustomDropdown'; 

const AddressInput = () => {
  const [cep, setCep] = useState('');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        setStates(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar estados:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedState) {
      axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`)
        .then(response => {
          setCities(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar cidades:', error);
        });
    }
  }, [selectedState]);

  const fetchAddress = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log('Endereço:', response.data);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  const stateOptions = states.map(state => ({ label: state.nome, value: state.id }));
  const cityOptions = cities.map(city => ({ label: city.nome, value: city.id }));

  return (
    <View style={styles.container}>
    
      <Text>Estado:</Text>
      <CustomDropdown
        options={stateOptions}
        selectedValue={selectedState}
        onValueChange={(value) => setSelectedState(value)}
      />

      <Text>Cidade:</Text>
      <CustomDropdown
        options={cityOptions}
        selectedValue={selectedCity}
        onValueChange={(value) => setSelectedCity(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default AddressInput;
