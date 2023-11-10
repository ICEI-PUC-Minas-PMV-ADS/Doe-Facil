import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Container from "../components/Container";

const InfoOndeDoar = () => {
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
          <Text style={styles.title}> Onde doar sangue</Text>

          <Text style={styles.subtitle}>
            A doação de sangue pode ser feita em hemocentros, hospitais e
            unidades de coleta de sangue.
          </Text>

          <Text style={styles.subtitle}>
            Hemocentros: Os hemocentros são unidades especializadas em coleta,
            processamento e distribuição de sangue e seus componentes. Eles são
            responsáveis por garantir o abastecimento de sangue de todo o país.
          </Text>

          <Text style={styles.subtitle}>
            Hospitais: Alguns hospitais também possuem unidades de coleta de
            sangue. Essas unidades geralmente são voltadas para atender às
            necessidades de sangue dos pacientes internados no hospital.
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default InfoOndeDoar;
