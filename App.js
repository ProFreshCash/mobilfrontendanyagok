import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Anyagok from "./Anyagok";
import Kalkulator from "./Kalkulator";
import Rendelesfel from "./Rendelesfel";

function CalcScreen({ navigation }) {
  return (
    <Kalkulator/>
  );
}

function MattersScreen({ navigation }) {
  return (
    <Anyagok/>
  );
}

function OrdersScreen({ navigation }) {
  return (
    <Rendelesfel/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Anyagok">
        <Drawer.Screen name="Kalkulátor" component={CalcScreen} />
        <Drawer.Screen name="Anyagok" component={MattersScreen} />
        <Drawer.Screen name="Rendelesfel" component={OrdersScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
