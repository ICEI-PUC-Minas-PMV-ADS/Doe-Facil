import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import Container from '../components/Container.js';
import Logo from '../components/Logo.js';
import Input from '../components/Input.js';

import { useNavigation } from '@react-navigation/native';

const NewAccount = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <View style={styles.container}>
                <Logo/>
                <Text style={styles.title}>Nova Conta</Text>
                <Input 
                    label='Nome'
                />
                <Input 
                    label='E-mail'
                />
                <Input 
                    label='Senha'
                    secureTextEntry
                    right={<TextInput.Icon icon="eye" />}
                />
                <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('HomePage')}}>
                    <Text style={styles.btnTitle}>Entrar</Text>
                </TouchableOpacity>
            </View>
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

export default NewAccount;