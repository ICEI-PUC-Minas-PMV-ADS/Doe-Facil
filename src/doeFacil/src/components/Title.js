import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';  

const Title = ({ title, onSearchPress, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
                    <MaterialIcons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.separator} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginTop: 30
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,  // Espaço adicionado na parte de cima
        paddingBottom: 10,  // Espaço adicionado na parte de baixo
    },
    backButtonContainer: {
        marginRight: 16,
    },
    title: {
        flex: 1,
        color: '#333',
        fontSize: 24,  
        fontWeight: '600',
        marginBottom: 8, // Espaço adicionado após o texto
    },
    separator: {
        height: 2,
        backgroundColor: 'red',
        width: '100%',  // Faz a linha ocupar toda a largura da tela
    },
});

export default Title;
