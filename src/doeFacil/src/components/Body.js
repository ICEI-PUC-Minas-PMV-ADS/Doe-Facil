import React from 'react';
import { StyleSheet, View } from 'react-native';

const Body = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default Body;