import * as React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

import InicialPage from './InicialPage.js';
import InfoInicial from './InfoIncial.js';
import DonationPointsPage from './DonationPointsPage.js';
import AccountPage from './AccountPage.js';

const RecentsRoute = () => <Text>Recents</Text>;

const HomePage = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'inicialPage', focusedIcon: 'home', unfocusedIcon: 'home-outline', getColor: 'rgb(222, 48, 47)' },
        { key: 'donationPointsPage', focusedIcon: 'map-marker-account', unfocusedIcon: 'map-marker-account-outline' },
        { key: '', focusedIcon: 'chat', unfocusedIcon: 'chat-outline' },
        { key: 'accountPage', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        inicialPage: InicialPage,
        donationPointsPage: DonationPointsPage,
        recents: RecentsRoute,
        accountPage: AccountPage,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{backgroundColor: 'rgb(252, 233, 233)'}}
            theme={{colors: {secondaryContainer: 'hidden'}}}
        />
    );
};

const styles = StyleSheet.create({
    btn: {
      backgroundColor:'#DE3O2F',
      color:'#FFF'
    },
});

export default HomePage;