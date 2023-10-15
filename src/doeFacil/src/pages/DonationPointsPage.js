import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

import Header from "../components/Header.js";
import Container from "../components/Container.js";
import Title from "../components/Title.js";
import Subtitle from "../components/Subtitle.js";
import DonationSearch from "../components/DonationSearch.js";
import AddressInput from "../components/AddressInput.js";

function DonationPointsPage() {
  const [donationPoints, setDonationPoints] = useState([]);


  return (
    <Container>
      <Header />
      <Title title="Buscar Local de Doação" />
      <Subtitle>Selecione o tipo de busca e seu endereço!</Subtitle>
      <DonationSearch />
      <AddressInput />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Text style={styles.searchBtnTitle}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => {}}>
          <Text style={styles.cancelBtnTitle}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    alignItems: "stretch",
    marginBottom: 20, 
  },
  searchBtnTitle: {
    color: "white",
    fontSize: width * 0.05, 
    textAlign: "center",
  },
  searchBtn: {
    backgroundColor: "#D3302F",
    margin: width * 0.02,
    paddingVertical: height * 0.02,
    borderRadius: 10,
    marginBottom: height * 0.02,
    width: "100%",
  },
  cancelBtnTitle: {
    color: "#D3302F",
    fontSize: width * 0.05,
    textAlign: "center",
  },
  cancelBtn: {
    backgroundColor: "white",
    margin: width * 0.02,
    paddingVertical: height * 0.02,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#D3302F",
    marginBottom: height * 0.02,
    width: "100%",
  },
});

export default DonationPointsPage;
