import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../pages/LoginPage.js';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default Main;
