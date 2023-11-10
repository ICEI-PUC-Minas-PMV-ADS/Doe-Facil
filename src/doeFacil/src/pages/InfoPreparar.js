import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Container from "../components/Container";

const InfoPreparar = () => {
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
          <Text style={styles.title}> Como preparar-se para doar sangue</Text>

          <Text style={styles.subtitle}>
            Antes de doar sangue, é importante seguir algumas orientações para
            garantir a sua segurança e o bom andamento da doação:
          </Text>

          <Text style={styles.subtitle}>
            Beba bastante líquido: Beba bastante líquido nas 24 horas que
            antecedem a doação, para evitar a desidratação.
          </Text>

          <Text style={styles.subtitle}>
            Evite alimentos gordurosos: Evite alimentos gordurosos nas 3 horas
            que antecedem a doação, para facilitar a coleta de sangue.
          </Text>

          <Text style={styles.subtitle}>
            Não fume nas 2 horas que antecedem a doação, para evitar a alteração
            dos níveis de oxigênio no sangue
          </Text>
        </View>
      </View>
    </Container>
  );
};
export default InfoPreparar;
