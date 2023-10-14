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
  },
});

export default Container;