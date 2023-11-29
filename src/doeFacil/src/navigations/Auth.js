import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../pages/LoginPage.js';
import NewAccount from '../pages/NewAccount.js';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="NewAccount"
        component={NewAccount}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default Main;
