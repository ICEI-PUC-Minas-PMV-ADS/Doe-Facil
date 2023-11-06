import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InfoComoDoar =  () => {

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
    
    <h1 style={styles.title}> Como doar sangue</h1>

      
      <Text style={styles.subtitle}> O processo de doação de sangue é simples e rápido, durando cerca de 45 minutos. O doador passa por uma triagem clínica, onde é verificado seu estado de saúde. Em seguida, é feita a coleta de sangue, que é realizada por um profissional treinado.</Text>

      <Text style={styles.subtitle}>Renovação da qualidade do sangue: A doação de sangue ajuda a renovar a qualidade do sangue, pois estimula a produção de novos glóbulos vermelhos.</Text>

    
    </View> 
    </>
  );

}
 
 
export default InfoComoDoar;