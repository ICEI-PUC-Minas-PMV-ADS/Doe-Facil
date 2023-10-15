import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../pages/HomePage.js';
import LoginPage from '../pages/LoginPage.js';
import DonationPointsPage from '../pages/DonationPointsPage.js';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="DonationPointsPage"
        component={DonationPointsPage}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default Main;
