import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Avatar, Text, Card } from "react-native-paper";

import Container from "../components/Container.js";
import Input from "../components/Input.js";

import { useNavigation } from "@react-navigation/native";

const AccountPage = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.sair}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LoginPage");
          }}
        >
          <Text style={{ color: "#D3302F", fontSize: 20 }}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Avatar.Image
            size={120}
            source={require("../../assets/avatar.png")}
          />
          <Text style={styles.titleName}>Maria dos Santos</Text>
        </View>
        <Input label="Nome" />
        <Input label="Sobrenome" />
        <Input label="E-mail" />
        <Input label="Senha" />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => {
            navigation.navigate("HomePage");
          }}
        >
          <Text style={styles.submitBtnTitle}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => {
            navigation.navigate("HomePage");
          }}
        >
          <Text style={styles.cancelBtnTitle}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleName: {
    fontSize: 25,
    padding: 10,
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: "#D3302F",
    margin: 10,
    paddingVertical: 17,
    textAlign: "center",
    borderRadius: 10,
    width: "70%",
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
    width: "70%",
  },
  cancelBtnTitle: {
    color: "#D3302F",
    textAlign: "center",
  },
  sair: {
    width: "100%",
    marginTop: 50,
    padding: 10,
    alignItems: "flex-end",
  },
});

export default AccountPage;
