import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';


const Title = ({ title }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.titleView}>
                <Text  style={styles.headerTitle} numberOfLines={2}>
                    {title}
                </Text>
                <TouchableOpacity style={styles.SearchButton} onPress={() => {}}>
                    
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        width: 250,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF'
    },
    SearchButton: {
        width: 26,
        height: 26
    }
    
});


export default Title;
