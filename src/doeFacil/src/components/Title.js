import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const Title = ({ title, onSearchPress }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        marginBottom: 20,
    },
    title: {
        color: '#333',
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 10,
    },
});

export default Title;
