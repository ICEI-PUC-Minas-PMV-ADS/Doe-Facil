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
        color: 'black',
        fontSize: 15,
        fontWeight: '300',
    },
});

export default Subtitle;
