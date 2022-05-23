import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home';


const AppSwitchNavigator = createSwitchNavigator({
    Home : Home
  })

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
      <AppNavigator />
  )
}








