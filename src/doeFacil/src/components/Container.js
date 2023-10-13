import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

export default Container;