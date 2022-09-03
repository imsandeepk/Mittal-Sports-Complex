import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Maincontainer from './navigation/Maincontainer'
import Login from './navigation/screen/login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Login} />
      <Stack.Screen name='Main' component={Maincontainer} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
  }
})
