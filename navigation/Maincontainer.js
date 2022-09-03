import { StyleSheet, TabBarIOSItem, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons"
import Homescreen from './screen/homescreen';
import Details from './screen/details';
import Setting from './screen/setting';
const homename = "Explore";
const details = "My Slots";
const setting = "Score";

const Tab =createBottomTabNavigator();



export default function Maincontainer() {
  return (
    
      <Tab.Navigator initialRouteName={homename} 
      screenOptions= {({route})=>({
        tabBarIcon: ({focused,color,size})=>{
          let iconName;
          let rn = route.name;
          if(rn==homename){
            iconName = focused ? "home" : "home-outline";
          }
          else if (rn==details){
            iconName = focused ? "list":"list-outline";

          }
          else if(rn==setting){
            iconName = focused ? "football":"football-outline";

          }
          return <Ionicons name={iconName} color={color} size={size} />        }
      })}>
        <Tab.Screen name = {homename} component={Homescreen} />
        <Tab.Screen name = {details} component={Details} />
        <Tab.Screen name = {setting} component={Setting} />
      </Tab.Navigator>
    
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
  }
  
})