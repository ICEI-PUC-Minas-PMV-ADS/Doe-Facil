import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import Container from '../components/Container.js';
import Logo from '../components/Logo.js';
import Input from '../components/Input.js';

import {useUser} from '../contexts/UserContext';
import API from "../services/Api.js";

import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
    const navigation = useNavigation();
    const {setSigned, setName } = useUser();
    const [email, setEmail] = useState('mary@example.com');
    const [password, setPassword] = useState('password456');

    const handleLogin = () => {

        API.signIn({
          email: email,
          password: password
        })
        
        if (API.signIn) {
            setSigned(true)
        }
        else {
            console.log('Usuário ou senha inválidos!');
        }
      }

    return (
        <Container>
            <View style={styles.container}>
                <Logo/>
                <Text style={styles.title}>Login</Text>
                <Input 
                    label='E-mail'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    label='Senha'
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    right={<TextInput.Icon icon="eye" />}
                />
                <TouchableOpacity onPress={() => {}}>
                    <Text>Esqueci minha senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                    <Text style={styles.btnTitle}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnNew} onPress={() => {}}>
                <Text style={styles.color}>Ainda não tem conta?</Text><Text style={styles.bold}>Clique aqui</Text>
            </TouchableOpacity>
        </Container>
    );
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        width: '100%'
    },
    title: {
      marginVertical: 10,
      fontSize: 40,
      textAlign: 'center',
    },
    btn: {
        backgroundColor: '#D3302F',
        margin: 20,
        paddingVertical: 15,
        textAlign: 'center',
        borderRadius: 10,
        marginBottom: 70,
        width: '70%'
    },
    btnTitle: {
        color: '#FFFAF4',
        textAlign: 'center',
    },
    btnNew: {
        color: '#D3302F',
        textAlign: 'center',
        flexDirection: 'row',
        gap: 5,
        marginBottom: 30,
        justifyContent: 'center',
        width: '100%'
    },
    bold: {
        color: '#D3302F',
        fontWeight: 'bold',
    },
    color: {
        color: '#D3302F',
    },
});  

export default LoginPage;