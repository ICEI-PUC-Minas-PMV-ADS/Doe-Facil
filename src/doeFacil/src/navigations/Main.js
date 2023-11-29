import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../pages/HomePage.js';
import DonationPointsPage from '../pages/DonationPointsPage.js';
import LocalDonorsListPage from '../pages/LocalDonorsListPage.js';
import DonorDetails from '../pages/DonorDetails.js';
import InfoInicial from '../pages/InfoIncial.js';
import InfoBeneficio from '../pages/InfoBeneficio.js';
import InfoComoDoar from '../pages/InfoComoDoar.js';
import InfoOndeDoar from '../pages/InfoOndeDoar.js';
import InfoPreparar from '../pages/InfoPreparar.js';
import InfoRequisitos from '../pages/InfoRequisitos.js';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="DonationPointsPage"
        component={DonationPointsPage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="LocalDonorsListPage"
        component={LocalDonorsListPage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="DonorDetails"
        component={DonorDetails}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="InfoInicial"
        component={InfoInicial}
        options={{ header: () => null }}
      />
       <Stack.Screen
        name="InfoBeneficio"
        component={InfoBeneficio}
        options={{ header: () => null }}
      />
       <Stack.Screen
        name="InfoComoDoar"
        component={InfoComoDoar}
        options={{ header: () => null }}
      />
       <Stack.Screen
        name="InfoOndeDoar"
        component={InfoOndeDoar}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="InfoPreparar"
        component={InfoPreparar}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="InfoRequisitos"
        component={InfoRequisitos}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default Main;
