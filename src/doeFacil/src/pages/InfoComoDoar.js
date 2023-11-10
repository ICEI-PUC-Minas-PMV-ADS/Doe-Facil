import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Container from "../components/Container";

const InfoComoDoar = () => {
  const styles = StyleSheet.create({
    tela: {
      marginTop: 50,
    },
    container: {
      backgroundColor: "#DE302F",
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      padding: 20,
      marginTop: 20,
      height: "100%",
      gap: 25,
    },
    title: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 35,
      marginTop: 30,
    },
    subtitle: {
      color: "#FFF",
      fontSize: 20,
    },
    cardImg: {
      height: 30,
      width: 30,
      marginLeft: 10,
    },
  });

  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.tela}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("InfoInicial");
          }}
        >
          <Image
            style={styles.cardImg}
            source={require("../../assets/seta.png")}
          />
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={styles.title}> Como doar sangue</Text>
          <Text style={styles.subtitle}>
            O processo de doação de sangue é simples e rápido, durando cerca de
            45 minutos. O doador passa por uma triagem clínica, onde é
            verificado seu estado de saúde. Em seguida, é feita a coleta de
            sangue, que é realizada por um profissional treinado.
          </Text>
          <Text style={styles.subtitle}>
            Renovação da qualidade do sangue: A doação de sangue ajuda a renovar
            a qualidade do sangue, pois estimula a produção de novos glóbulos
            vermelhos.
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default InfoComoDoar;
