import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from '@expo/vector-icons';
import Title from "../components/Title.js";

const PointsDetails = ({ route, navigation }) => {
  const { donor } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Title title="Detalhes do Local" navigation={navigation} />

      <View style={styles.centerContent}>
        <FontAwesome5 name="hospital-alt" size={60} color="#DE302F" />
        <Text style={styles.donorName}>{donor.location.locationName}</Text>
      </View>

      <View style={styles.instructionContainer}>
        <Text style={styles.instruction}>
        {donor.address.street}, {donor.address.number}, {donor.address.neighborhood}, {donor.address.city}, {donor.address.state}, CEP {donor.address.postalCode}
        </Text>
      </View>

      <View style={styles.startContent}>
        <Text style={styles.donorInfo}>Horário de funcionamento: Segunda a Sexta-feira, das 9h às 17h |  Sábados, das 9h às 12h</Text>
        <Text style={styles.donorInfo}>Distância: Aproximadamente 5km do centro da cidade</Text>
        <Text style={styles.donorInfo}>Doações este mês: 120 doações realizadas</Text>
        <Text style={styles.donorInfo}>Contato: contato@hemominas.com</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  startContent: {
    alignItems: "baseline",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 10
  },
  donorName: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10
  },
  donorInfo: {
    fontSize: 16,
    marginBottom: 4,
  },
  donorAddress: {
    fontSize: 14,
    color: "grey",
    marginTop: 8,
  },
  instructionContainer: {
    backgroundColor: "#DE302F",
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  instruction: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});

export default PointsDetails;
