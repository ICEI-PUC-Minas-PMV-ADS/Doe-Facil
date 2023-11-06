import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InfoRequisitos =  () => {

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
    
    <h1 style={styles.title}> Requisitos para doar sangue</h1>

      
      <Text style={styles.subtitle}>Para doar sangue, é necessário atender aos seguintes requisitos:</Text>

      <Text style={styles.subtitle}>Idade: Entre 16 e 69 anos (menores de 18 anos devem apresentar autorização do responsável legal).
Peso: No mínimo 50 kg.</Text>

      <Text style={styles.subtitle}>Saúde: Estar em bom estado de saúde e não apresentar nenhum dos critérios de exclusão listados.</Text>

      <Text style={styles.subtitle}>Jejum: Não é necessário jejum, mas é recomendado evitar alimentos gordurosos nas 3 horas que antecedem a doação.</Text>

      <Text style={styles.subtitle}>Dormir: Ter dormido pelo menos 6 horas nas últimas 24 horas.</Text>

      <Text style={styles.subtitle}>Álcool: Não ter ingerido álcool nas últimas 12 horas.</Text>

    </View> 

    </>
  );

}
 
 
export default InfoRequisitos;