import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import CardOK from '../components/CardOK';
import { useNavigation } from '@react-navigation/native';
import comoDoar from '../../assets/comoDoar.png';
import ondeDoar from '../../assets/ondeDoar.png'; 
import beneficio from '../../assets/beneficio.png'; 
import preparar from '../../assets/preparar.png';
import requisitos from '../../assets/requisitos.png';

const InfoInicial = () => {

    const styles = StyleSheet.create({
        container: {
            marginTop:'20px',
            backgroundColor: 'branco',
            width: '90%',
            alignSelf: 'center',
              
        },
        title:{
           color:'#DE302F',
           marginBottom:'-20px',
        },
        subtitle:{
            color: '#786C6C',

        }
    });

    const navigation = useNavigation();

    return (
        <>
<ScrollView style={{height: 600}}>

            <View style={styles.container}>

                <h2 style={styles.title} >Informativo</h2>
                <h4 style={styles.subtitle}>Tira suas duvidas abaixo!</h4>

            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('InfoComoDoar') }}>
                <CardOK title='Como Doar' subtitle='É simples, rápido e seguro.' img={comoDoar}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('InfoBeneficio') }}>
                <CardOK title='Benefícios' subtitle='Também há benefícios para o doador.'img={beneficio} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('InfoRequisitos') }}>
                <CardOK title='Requisitos' subtitle='É importante para garantir segurança no processo.'img={requisitos} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('InfoOndeDoar') }}>
                <CardOK title='Onde doar' subtitle='Pode ser feita em hemocentros e entre outros.' img={ondeDoar}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('InfoPreparar') }}>
                <CardOK title='Como preparar-se' subtitle='É importante seguir algumas orientações.' img={preparar}/>
            </TouchableOpacity>
</ScrollView>

        </>
    );

}

export default InfoInicial;
