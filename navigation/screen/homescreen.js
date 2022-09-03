import { StyleSheet, Text, View, Image,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Homescreen({navigation}) {
  return (
    <View style={styles.main}>
      <Image style={styles.img} source={require("../../assets/images/msc.jpeg")}></Image>
      <View style={{flex:2,flexDirection:'row'}}>
      <TouchableOpacity>
          <Image style={styles.tabs} source={require("../../assets/images/TT.jpeg")}></Image>
        <Text style={styles.text}>Table tennis</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.tabs} source={require("../../assets/images/squash.jpeg")}></Image>
        <Text style={styles.text}>Squash</Text>
        </TouchableOpacity>
        
        
      </View>
        
        
     
      <View style={{flex:2,flexDirection:'row'}}>
      <TouchableOpacity>
          <Image style={styles.tabs} source={require("../../assets/images/bad.jpeg")}></Image>
        <Text style={styles.text}>Badminton</Text>
        </TouchableOpacity>
        
        
        
      </View>
      

    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:"#0078AA",
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
  },
  img:{
    marginTop:20,
    marginLeft:30,
    marginRight:30,
    height:200,
    width:Dimensions.get("screen").width-20,
    borderRadius:3,
  },
  tabs:{
    marginTop:10,
    marginLeft:15,
    marginRight:15,
    height:150,
    width:150,
    borderRadius:3,
    
    
  },
  text:{
    justifyContent:'center',
    alignSelf:'center',
    fontSize:17,
    fontWeight:"400",

  }


})
