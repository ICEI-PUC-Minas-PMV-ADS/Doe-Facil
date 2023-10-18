import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Subtitle = ({ children, style }) => {
    return (
        <Text style={[styles.subtitle, style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        color: '#333',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 10, 
    },
});

export default Subtitle;
