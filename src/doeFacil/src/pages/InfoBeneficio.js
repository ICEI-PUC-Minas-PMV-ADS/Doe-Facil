import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Container from "../components/Container";

const InfoBeneficio = () => {
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
          <Text style={styles.title}> Benefícios da doação de sangue</Text>

          <Text style={styles.subtitle}>
            Além de salvar vidas, a doação de sangue traz benefícios para o
            próprio doador, como:
          </Text>

          <Text style={styles.subtitle}>
            Renovação da qualidade do sangue: A doação de sangue ajuda a renovar
            a qualidade do sangue, pois estimula a produção de novos glóbulos
            vermelhos.
          </Text>

          <Text style={styles.subtitle}>
            Redução do risco de doenças cardíacas: A doação de sangue pode
            ajudar a reduzir o risco de doenças cardíacas, pois melhora a
            circulação sanguínea.
          </Text>

          <Text style={styles.subtitle}>
            Redução do risco de anemia: A doação de sangue pode ajudar a reduzir
            o risco de anemia, pois aumenta o número de glóbulos vermelhos no
            sangue.
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default InfoBeneficio;
