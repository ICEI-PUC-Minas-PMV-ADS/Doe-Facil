import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Avatar, Text, Card  } from 'react-native-paper';

import Header from '../components/Header.js';
import Container from '../components/Container.js';
import { useNavigation } from '@react-navigation/native';

const InicialPage = () => {
    const navigation = useNavigation();

    const [visible, setVisible] = React.useState(false);

    return (
        <Container>
            <Header />
            <View style={styles.align}>
                <View style={styles.topPage}>
                    <Avatar.Image size={120} source={require('../../assets/avatar.png')} />
                    <Text style={styles.titleName}>Maria dos Santos</Text>
                </View>
                <View style={styles.cards}>
                    <Card style={styles.card} >
                        <Card.Content style={styles.cardContent} >
                            <Image style={styles.cardImg} source={require('../../assets/blood-plus.png')} />
                            <Text variant="titleLarge" style={styles.cardTitle}> 24 Doações </Text>
                        </Card.Content>
                    </Card>
                    <Card style={styles.card} >
                        <Card.Content style={styles.cardContent} >
                            <Image style={styles.cardImgNivel} source={require('../../assets/nivel.png')} />
                            <Text variant="titleLarge" style={styles.cardTitle}> Nível 13 </Text>
                        </Card.Content>
                    </Card>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('InfoInicial')}}>
                    <Text style={styles.btnTitle}>Informativo</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sectionTotal}>
                <Text style={styles.depTitleTotal}>Total de doações pelo app</Text>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.btn} onPress={() => {}}>
                        <Text style={styles.btnTitleBold}>27614</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    align: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    topPage: {
        backgroundColor: 'rgb(222, 48, 47)',
        borderBottomLeftRadius: 160,
        borderBottomRightRadius: 160,
        height: 270,
        width: '100%',
        alignItems: 'center',
        padding: 10
    },
    menu: {
        paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
    },
    titleName: {
        color: 'white',
        fontSize: 25,
        padding: 10,
        marginTop: 10,
    },
    cards: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        top: -50
    },
    card: {
        width: 160,
        height: 100,
        color: 'rgb(222, 48, 47)',
        backgroundColor: 'white',
        paddingRight: 15,
    },
    cardTitle: {
        color: 'rgb(222, 48, 47)',
        textAlign: 'center'
    },
    cardImg: {
        width: 65,
        height: 65
    },
    cardImgNivel: {
        width: 65,
        height: 65,
        marginLeft: 20
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pad: {
        paddingLeft: 20
    },
    btn: {
        backgroundColor: '#D3302F',
        margin: 20,
        paddingVertical: 15,
        textAlign: 'center',
        borderRadius: 10,
        width: '70%',
        marginBottom: 50
    },
    btnTitle: {
        color: '#FFFAF4',
        textAlign: 'center',
    },
    dep: {
        marginLeft: 20,
        gap: 30
    },
    depTitle: {
        color: 'rgb(222, 48, 47)',
        fontSize: 25,
    },
    sectionTotal: {
        marginTop: 30,
        gap: 5
    },
    depTitleTotal: {
        color: 'rgb(222, 48, 47)',
        fontSize: 25,
        marginLeft: 20,
    },
    btnTitleBold: {
        color: '#FFFAF4',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default InicialPage;