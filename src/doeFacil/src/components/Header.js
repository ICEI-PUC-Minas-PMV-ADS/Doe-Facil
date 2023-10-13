import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = () => {
    return (
        <Appbar.Header style={styles.header}>
            <Appbar.Content title={
                <Image source={require("../../assets/doe-facil.png")}
                    style={{
                        width: 120,
                        height: 30,
                    }}
                />} 
            style={styles.title} />
            <Appbar.Action icon="dots-vertical" onPress={() => {}} color='white' />
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'rgb(222, 48, 47)',
      color:'#FFF'
    }
  });
  

export default Header;