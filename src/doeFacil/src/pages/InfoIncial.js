import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import CardOK from "../components/CardOK";
import { useNavigation } from "@react-navigation/native";
import comoDoar from "../../assets/comoDoar.png";
import ondeDoar from "../../assets/ondeDoar.png";
import beneficio from "../../assets/beneficio.png";
import preparar from "../../assets/preparar.png";
import requisitos from "../../assets/requisitos.png";

import Container from "../components/Container";
import Body from "../components/Body";

const InfoInicial = () => {

  const styles = StyleSheet.create({
    tela: {
      width: "90%",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      margin: 10,
    },
    container: {
      width: "100%",
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 20,
    },
    title: {
      color: "#DE302F",
      fontSize: 23,
    },
    subtitle: {
      color: "#786C6C",
      fontSize: 14,
    },
    cardImg: {
      height: 25,
      width: 25,
      marginLeft: 10,
      marginTop: 50
    },
  });

  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomePage");
          }}
        >
          <Image
            style={styles.cardImg}
            source={require("../../assets/seta.png")}
          />
        </TouchableOpacity>
      <ScrollView style={{ height: 600 }}>
        <View style={styles.tela}>
          <View style={styles.container}>
            <Text style={styles.title}>Informativo</Text>
            <Text style={styles.subtitle}>Tira suas duvidas abaixo!</Text>
          </View>

          <Body>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InfoComoDoar");
              }}
            >
              <CardOK
                title="Como Doar"
                subtitle="É simples, rápido e seguro."
                img={comoDoar}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InfoBeneficio");
              }}
            >
              <CardOK
                title="Benefícios"
                subtitle="Também há benefícios para o doador."
                img={beneficio}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InfoRequisitos");
              }}
            >
              <CardOK
                title="Requisitos"
                subtitle="É importante para garantir segurança no processo."
                img={requisitos}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InfoOndeDoar");
              }}
            >
              <CardOK
                title="Onde doar"
                subtitle="Pode ser feita em hemocentros e entre outros."
                img={ondeDoar}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InfoPreparar");
              }}
            >
              <CardOK
                title="Como preparar-se"
                subtitle="É importante seguir algumas orientações."
                img={preparar}
              />
            </TouchableOpacity>
          </Body>
        </View>
      </ScrollView>
    </Container>
  );
};

export default InfoInicial;
