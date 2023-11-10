import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CardOK = ({ title, subtitle, img }) => {

    const styles = {
        container: {
            width: '100%',
            paddingVertical: 30,
            paddingHorizontal: 20,
            marginBottom: 20,
            backgroundColor: 'rgb(222, 48, 47)',
            borderRadius: 30
        },
        conteudo: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
        },
        text: {
            width: '80%'
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            color:'#FFF',
        },
        subtitle: {
            fontSize: 13,
            color:'#FCCBCB',
            fontWeight:500,
        },
        cardImg: {
            width: 60,
            height: 60,
        },
    };

    console.log(img)

    return (

        <>
            <View style={styles.container}>
                <View style={styles.conteudo}>
                    <View style={styles.text}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </View>
                    <Image style={styles.cardImg} source={img} />
                </View>
            </View>
        </>
    )
}

export default CardOK;