import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {enableScreens} from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Home from './app/screens/Home';
import Settings from './app/screens/Settings';
import DanhSach from './app/screens/DanhSach';
import ChiTiet from './app/screens/ChiTiet';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component = {Home} options={{title:"Home"}}/>
        <Stack.Screen name = "Settings" component = {Settings} options={{title:"Settings"}}/>
        <Stack.Screen name = "DanhSach" component = {DanhSach} options={{title:"Danh Sach"}}/>
        <Stack.Screen name = "ChiTiet" component = {ChiTiet} options={{title:"Chi Tiet"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});