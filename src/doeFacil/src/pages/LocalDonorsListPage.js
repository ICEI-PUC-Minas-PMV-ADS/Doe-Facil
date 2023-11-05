import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Title from "../components/Title.js";
import Subtitle from "../components/Subtitle.js";
import Container from "../components/Container.js";


const LocalDonorsListPage = ({ route }) => {
    const { localDonors } = route.params;
    const navigation = useNavigation();


    const handleDonorClick = (donor) => {
        navigation.navigate('DonorDetails', { donor });
      };

    return (
        <Container style={styles.container}>
            <Title title="Candidatos a Doação" navigation={navigation} />
                <View style={styles.titleContainer}>
                    <Subtitle>Selecione para saber mais informações.</Subtitle>
                </View>
                {localDonors && localDonors.map(donor => (
                    <TouchableOpacity key={donor.localDonorId} onPress={() => handleDonorClick(donor)}>
                    <LinearGradient
                        colors={['#DE302F', '#F5F5F5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.donorCard}
                        key={donor.localDonorId}
                    >
                        <View style={styles.donorCardIcon}>
                            {/* <Image source={require('../src/images/avatar.png')} /> */}
                        </View>
                        <Text style={styles.donorName}>{donor.user.firstName} {donor.user.lastName}</Text>
                        <Text style={styles.donorInfo}>Tipo de Sangue: {donor.bloodType}</Text>
                        <Text style={styles.donorInfo}>Hospital: {donor.location.locationName}</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                ))}
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        width: '100%'
      },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    titleContainer: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    closeButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#D3302F',
    },
    donorCard: {
        padding: 30, 
        marginBottom: 40, 
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
    },
    donorName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFFFFF',
        textAlign: 'left',
    },
    donorInfo: {
        fontSize: 16,
        marginBottom: 5,
        color: '#FFFFFF',
        textAlign: 'left',
    },
    donorAddress: {
        fontSize: 16,
        marginBottom: 10,
        color: '#FFFFFF',
        textAlign: 'left',
    },
    distance: {
        fontSize: 16,
        color: '#D3302F',
        textAlign: 'left',
    },
    donorCardIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    donorMileage: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    }
});

export default LocalDonorsListPage;
