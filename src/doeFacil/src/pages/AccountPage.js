import React, { useEffect, useState } from "react";
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

import { useUser } from "../contexts/UserContext";
import API from "../services/Api.js";

import { useNavigation } from "@react-navigation/native";

const AccountPage = () => {
  const navigation = useNavigation();
  const {
    setSigned,
    name,
    setName,
    lastName,
    setLastName,
    cpf,
    setCpf,
    phone,
    setPhone,
  } = useUser();

  const handleExit = () => {
    setSigned(false);
  };

  const handleSalvar = () => {
    setName(name), setLastName(lastName), setCpf(cpf), setPhone(phone);
  };

  return (
    <Container>
      <View style={styles.sair}>
        <TouchableOpacity onPress={handleExit}>
          <Text style={{ color: "#D3302F", fontSize: 20 }}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Avatar.Image
            size={120}
            source={require("../../assets/avatar.png")}
          />
          <Text style={styles.titleName}>
            {name} {lastName}
          </Text>
        </View>
        <Input
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          label="Sobrenome"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <Input label="CPF" value={cpf} onChangeText={(text) => setCpf(text)} />
        <Input
          label="Telefone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={handleSalvar}>
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
    marginTop: 3,
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
