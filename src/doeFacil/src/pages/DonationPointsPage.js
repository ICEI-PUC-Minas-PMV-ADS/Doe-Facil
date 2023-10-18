import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Picker, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import API from "../services/Api.js";

import Header from "../components/Header.js";
import Container from "../components/Container.js";
import Title from "../components/Title.js";
import Subtitle from "../components/Subtitle.js";
import AddressInput from "../components/AddressInput.js";

function DonationPointsPage() {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("");

  
  const handleSearchData = async () => {
    if(selectedValue === "locals") {
      const locationS = await API.getLocations();
      // navigation.navigate('DonationPointsListPage', { locationS });
    }
    else {
      const localDonorsS = await API.getLocalDonors();
      navigation.navigate('LocalDonorsListPage', { localDonorsS });
     
    }
  }

  const handleCancel = () => {
    setSelectedValue("locals");
  }

  return (
    <Container style={styles.container}>
      <Header />
      <View style={styles.titleContainer}>
      <Title title="Locais de Doação" />
        <Subtitle>Selecione o tipo de busca e insira sua localização.</Subtitle>
      </View>
      
      <Picker
        selectedValue={selectedValue}
        style={styles.pickerStyle}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Selecione..." value="" />
        <Picker.Item label="Locais para doar sangue." value="locals" />
        <Picker.Item label="Pessoas que precisam de doação." value="people" />
      </Picker>

      <AddressInput placeholder="Qual o seu endereço?" />

      <View style={styles.fixedButtonContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitBtn} onPress={() => { handleSearchData() }}>
            <Text style={styles.submitBtnTitle}>Buscar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelBtn} onPress={() => { handleCancel() }}>
            <Text style={styles.cancelBtnTitle}>Cancelar</Text>
          </TouchableOpacity>
        </View>
       </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    width: '100%'
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickerStyle: {
    height: 50,
    marginBottom: 20

  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "stretch",
    marginBottom: 20,
    width: '80%'
  },
  submitBtnTitle: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  submitBtn: {
    backgroundColor: '#D3302F',
    margin: 20,
    paddingVertical: 15,
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 70,
    width: '100%'
    
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    paddingBottom: 20,  
  },

  buttonContainer: {
    paddingHorizontal: 20,
    width: '100%',
  },

  submitBtn: {
    backgroundColor: '#D3302F',
    margin: 20,
    paddingVertical: 15,
    textAlign: 'center',
    borderRadius: 10,
  },

  submitBtnTitle: {
    color: '#FFF',
    textAlign: 'center',
  },

  cancelBtn: {
    backgroundColor: '#FFF',
    margin: 20,
    paddingVertical: 15,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#D3302F',

  },

  cancelBtnTitle: {
    color: '#D3302F',
    textAlign: 'center',
  },
});

export default DonationPointsPage;
