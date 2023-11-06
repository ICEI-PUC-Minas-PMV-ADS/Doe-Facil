import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InfoOndeDoar =  () => {

    const styles = StyleSheet.create({
        container: {
            marginTop:'20px',
            backgroundColor: '#DE302F',
            borderTopLeftRadius:50,
            borderTopRightRadius: 50,
            width: '100%',
            alignSelf: 'center',
            height: '100vh',
            padding: 20,
         
        },
        title:{
           color:'#fff',
           fontSize: '40px',
        },
        subtitle:{
            color:'#FFF',
            fontSize: '20px',
        },
        cardImg:{
          height:'30px',
          width:'30px',
          marginLeft:'25px',
          marginTop:'30px',
        }
    });

    const navigation = useNavigation();

  return (
<>
    <TouchableOpacity onPress={() => { navigation.navigate('InfoInicial') }}> <Image style={styles.cardImg} source={require('../../assets/seta.png')} /></TouchableOpacity>

    <View style={styles.container}>
    
    <h1 style={styles.title}> Onde doar sangue</h1>

      
      <Text style={styles.subtitle}> A doação de sangue pode ser feita em hemocentros, hospitais e unidades de coleta de sangue.</Text>

      <Text style={styles.subtitle}> Hemocentros:
Os hemocentros são unidades especializadas em coleta, processamento e distribuição de sangue e seus componentes. Eles são responsáveis por garantir o abastecimento de sangue de todo o país.</Text>

      <Text style={styles.subtitle}> Hospitais:
Alguns hospitais também possuem unidades de coleta de sangue. Essas unidades geralmente são voltadas para atender às necessidades de sangue dos pacientes internados no hospital.</Text>

    
    </View> 
    </>
  );

}
 
export default InfoOndeDoar;