import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InfoBeneficio = () => {

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
    
    <h1 style={styles.title}> Benefícios da doação de sangue</h1>

      
      <Text style={styles.subtitle}> Além de salvar vidas, a doação de sangue traz benefícios para o próprio doador, como:</Text>

      <Text style={styles.subtitle}>Renovação da qualidade do sangue: A doação de sangue ajuda a renovar a qualidade do sangue, pois estimula a produção de novos glóbulos vermelhos.</Text>

      <Text style={styles.subtitle}>Redução do risco de doenças cardíacas: A doação de sangue pode ajudar a reduzir o risco de doenças cardíacas, pois melhora a circulação sanguínea.</Text>

      <Text style={styles.subtitle}>Redução do risco de anemia: A doação de sangue pode ajudar a reduzir o risco de anemia, pois aumenta o número de glóbulos vermelhos no sangue.</Text>
    
    </View> 

     </>
  );

}
 
export default InfoBeneficio;
