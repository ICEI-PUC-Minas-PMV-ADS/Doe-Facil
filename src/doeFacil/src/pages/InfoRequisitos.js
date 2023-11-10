import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Container from "../components/Container";

const InfoRequisitos = () => {
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
          <Text style={styles.title}> Requisitos para doar sangue</Text>

          <Text style={styles.subtitle}>
            Para doar sangue, é necessário atender aos seguintes requisitos:
          </Text>

          <Text style={styles.subtitle}>
            Idade: Entre 16 e 69 anos (menores de 18 anos devem apresentar
            autorização do responsável legal). Peso: No mínimo 50 kg.
          </Text>

          <Text style={styles.subtitle}>
            Saúde: Estar em bom estado de saúde e não apresentar nenhum dos
            critérios de exclusão listados.
          </Text>

          <Text style={styles.subtitle}>
            Jejum: Não é necessário jejum, mas é recomendado evitar alimentos
            gordurosos nas 3 horas que antecedem a doação.
          </Text>

          <Text style={styles.subtitle}>
            Dormir: Ter dormido pelo menos 6 horas nas últimas 24 horas.
          </Text>

          <Text style={styles.subtitle}>
            Álcool: Não ter ingerido álcool nas últimas 12 horas.
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default InfoRequisitos;
