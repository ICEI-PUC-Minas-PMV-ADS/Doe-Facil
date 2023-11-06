import * as React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

import InicialPage from './InicialPage.js';
import InfoInicial from './InfoIncial.js';


const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <InfoInicial></InfoInicial>

const NotificationsRoute = () => <Text>Notifications</Text>;

const HomePage = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'inicialPage', focusedIcon: 'home', unfocusedIcon: 'home-outline', getColor: 'rgb(222, 48, 47)' },
        { key: 'albums', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
        { key: 'recents', focusedIcon: 'file-document', unfocusedIcon: 'file-document-outline' },
        { key: 'notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        inicialPage: InicialPage,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        notifications: NotificationsRoute,
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