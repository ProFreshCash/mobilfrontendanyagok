import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Anyagok from "./Anyagok";
import Kalkulator from "./Kalkulator";
import Rendelesfel from "./Rendelesfel";
import ParkettaKalkulator from "./Kalkulatorparketta";
import KeziBetonKalkulator from "./Kalkulatorbetonkezi";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Title } from 'react-native-paper';

function CalcScreen({ navigation }) {
  return (
    <Kalkulator/>
  );
}

function ParkCalcScreen({ navigation }) {
  return (
    <ParkettaKalkulator/>
  );

}

function HandCalcScreen({ navigation }) {
  return (
    <KeziBetonKalkulator/>
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
      <Drawer.Navigator initialRouteName="Beton kalkulátor">
        <Drawer.Screen name="Beton kalkulátor" options={{ drawerIcon: ({ color }) => (
        <FontAwesome5 name="calculator" color={color} size={20} style={{marginRight: -19}}/> )}} component={CalcScreen} />
        <Drawer.Screen name="Parketta kalkulátor" options={{ drawerIcon: ({ color }) => (
        <FontAwesome5 name="calculator" color={color} size={20} style={{marginRight: -19}}/> )}} component={ParkCalcScreen} />
         <Drawer.Screen name="Kézi beton kalkulátor" options={{ drawerIcon: ({ color }) => (
        <FontAwesome5 name="calculator" color={color} size={20} style={{marginRight: -19}}/> )}} component={HandCalcScreen} />
        <Drawer.Screen name="Anyagok" options={{ drawerIcon: ({ color }) => (
        <FontAwesome5 name="cubes" color={color} size={20} style={{marginRight: -20}}/> )}} component={MattersScreen} />
        <Drawer.Screen name="Rendelés leadása" options={{ drawerIcon: ({ color }) => (
        <FontAwesome5 name="clipboard-list" color={color} size={20} style={{marginRight: -17}}/> )}} component={OrdersScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
