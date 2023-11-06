import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CardOK = ({ title, subtitle, img }) => {

    const styles = {
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
            height: 130,
            marginBottom: 25,
            alignItems: 'center',
            paddingLeft : '36px',
            paddingRight : '36px',
            flexShrink: 0,
            borderRadius: 41,
            background: 'linear-gradient(92deg, #DE302F 32.17%, #FF8281 91.09%)',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color:'#FFF',
        },
        subtitle: {
            fontSize: 16,
            color:'#FCCBCB',
            fontWeight:500,
            width:'250px',
        },

        cardImg: {
            width: 65,
            height: 65
        },
    };

    console.log(img)

    return (

        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <Image style={styles.cardImg} source={img} />
            </View>
        </>
    )
}

export default CardOK;