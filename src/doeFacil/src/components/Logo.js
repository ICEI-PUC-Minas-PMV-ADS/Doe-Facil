import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Logo() {
  return (
      <Image style={styles.logo} source={require('../../assets/blood.png')} />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 85,
    resizeMode: 'stretch',
    marginTop: 10
  }
});