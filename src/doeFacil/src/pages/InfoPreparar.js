import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InfoPreparar =  () => {

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

<h1 style={styles.title}> Como preparar-se para doar sangue</h1>


<Text style={styles.subtitle}> Antes de doar sangue, é importante seguir algumas orientações para garantir a sua segurança e o bom andamento da doação:</Text>

<Text style={styles.subtitle}> Beba bastante líquido: Beba bastante líquido nas 24 horas que antecedem a doação, para evitar a desidratação.</Text>

<Text style={styles.subtitle}> Evite alimentos gordurosos: Evite alimentos gordurosos nas 3 horas que antecedem a doação, para facilitar a coleta de sangue.</Text>

<Text style={styles.subtitle}> Não fume nas 2 horas que antecedem a doação, para evitar a alteração dos níveis de oxigênio no sangue</Text>


</View> 
</>
);
}
export default InfoPreparar;