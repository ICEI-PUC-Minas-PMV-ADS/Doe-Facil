import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LocalDonorsListPage = ({ localDonorsS }) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Candidatos à Doação de Sangue</Text>
                <TouchableOpacity>
                    <Text style={styles.closeButton}>X</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchBar}>
                <Text style={styles.searchText}>REALIZAR NOVA BUSCA</Text>
            </View>
            

            {localDonorsS && localDonorsS.map(point => (
                <View style={styles.pointCard} key={point.localDonorId}>
                    <Text style={styles.pointName}>{point.locationId}</Text>
                    <Text style={styles.pointAddress}>{point.userId}</Text>
                    <Text style={styles.distance}>Menos de: {point.bloodType} km</Text>
                    {/* <Text style={styles.workingHours}>Horário de Funcionamento: {point.workingHours}</Text> */}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
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
    searchBar: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    searchText: {
        color: '#A5A5A5',
    },
    donorCard: {
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    donorName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    donorInfo: {
        fontSize: 16,
        marginBottom: 5,
    },
    donorAddress: {
        fontSize: 16,
        marginBottom: 10,
        color: '#A5A5A5',
    },
    distance: {
        fontSize: 16,
        color: '#D3302F',
    },
    pointCard: {
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    pointName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    pointAddress: {
        fontSize: 16,
        marginBottom: 10,
        color: '#A5A5A5',
    },
    workingHours: {
        fontSize: 16,
        color: '#A5A5A5',
        marginBottom: 5,
    },
});

export default LocalDonorsListPage;
