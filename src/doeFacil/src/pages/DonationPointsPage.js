import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import API from "../services/Api.js";

import Container from "../components/Container.js";
import Title from "../components/Title.js";
import CustomDropdown from "../components/CustomDropdown.js";
import axios from "axios";

function DonationPointsPage() {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("");
  const [cep, setCep] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const options = [
    { label: "Locais para doar sangue.", value: "locals" },
    { label: "Pessoas que precisam de doação.", value: "people" },
  ];

  const handleSearchData = async () => {
    if (selectedValue === "locals") {
      const locationS = await API.getLocations();
      // navigation.navigate('DonationPointsListPage', { locationS });
    } else {
      const localDonors = await API.getLocalDonors();
      navigation.navigate("LocalDonorsListPage", { localDonors });
    }
  };

  const handleCancel = () => {
    setSelectedValue("locals");
  };

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        setStates(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar estados:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedState) {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`
        )
        .then((response) => {
          setCities(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar cidades:", error);
        });
    }
  }, [selectedState]);

  const fetchAddress = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log("Endereço:", response.data);
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  const stateOptions = states.map((state) => ({
    label: state.nome,
    value: state.id,
  }));
  const cityOptions = cities.map((city) => ({
    label: city.nome,
    value: city.id,
  }));

  return (
    <Container style={styles.container}>
      <Title title="Locais de Doação" navigation={navigation} />

      <View style={styles.instructionContainer}>
        <Text style={styles.instruction}>
          Selecione o tipo de busca, selecione o seu estado, cidade e clique em
          Buscar para encontrar os locais mais próximos
        </Text>
      </View>
      <Text style={styles.label}>Tipo de Busca:</Text>
      <CustomDropdown
        options={options}
        selectedValue={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
      />
      <Text style={styles.label}>Estado:</Text>
      <CustomDropdown
        options={stateOptions}
        selectedValue={selectedState}
        onValueChange={(value) => setSelectedState(value)}
      />

      <Text style={styles.label}>Cidade:</Text>
      <CustomDropdown
        options={cityOptions}
        selectedValue={selectedCity}
        onValueChange={(value) => setSelectedCity(value)}
      />
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => {
            handleSearchData();
          }}
        >
          <Text style={styles.submitBtnTitle}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => {
            handleCancel();
          }}
        >
          <Text style={styles.cancelBtnTitle}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    width: "100%",
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  pickerStyle: {
    height: 50,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "stretch",
    marginBottom: 20,
    width: "80%",
  },
  submitBtnTitle: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  submitBtn: {
    backgroundColor: "#D3302F",
    margin: 20,
    paddingVertical: 15,
    textAlign: "center",
    borderRadius: 10,
    marginBottom: 70,
    width: "100%",
  },
  fixedButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },

  buttonContainer: {
    paddingHorizontal: 20,
    width: "100%",
  },

  submitBtn: {
    backgroundColor: "#D3302F",
    margin: 10,
    paddingVertical: 17,
    textAlign: "center",
    borderRadius: 10,
  },
  submitBtnTitle: {
    color: "#FFF",
    textAlign: "center",
  },
  cancelBtn: {
    backgroundColor: "#FFF",
    margin: 10,
    paddingVertical: 15,
    textAlign: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#D3302F",
  },
  cancelBtnTitle: {
    color: "#D3302F",
    textAlign: "center",
  },
  instructionContainer: {
    backgroundColor: "#DE302F",
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  instruction: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  label: {
    color: "#D3302F",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 5,
  },
});

export default DonationPointsPage;
