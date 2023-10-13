import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    marginBottom: 20,
    width: '80%'
  },
});

export default Input;