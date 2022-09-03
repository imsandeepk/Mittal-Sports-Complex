import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity ,Image, Button, KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react'


import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { app } from '../../firebase';

export default function Details({navigation}) {
  const [Name, setName] = useState("")
  const [EntryNo, setEntryNo] = useState("")
  const [Sport, setSport] = useState("")
  const [Time, setTime] = useState("")
  app.firestore()

const SendData=async()=>{
  const firestore = app.getFirestore();
  await setDoc(doc(firestore,"user","user_id"), {
    name:Name,
    entryno : EntryNo,
    sport: Sport,
    time:Time,
  
  });
  alert("your slot has been booked!")

}





  return (
    
    
    
    <KeyboardAvoidingView
    style={styles.main}
    behavior="padding">
    <View style={styles.main}>
      <Image style={styles.img} source={require("../../assets/images/msc.png")}/>
      <TextInput placeholder= 'Name' onChangeText={text=>setName(text)} style={styles.input}></TextInput>
      <TextInput placeholder='Entry Number' onChangeText={text=>setEntryNo(text)}  style={styles.input}></TextInput>
      <TextInput placeholder='Sport' onChangeText={text=>setSport(text)}  style={styles.input}></TextInput>
      <TextInput placeholder='Time Duration ( In 24 Hr Format)' onChangeText={text=>setTime(text)}  style={styles.input}></TextInput>
      <TouchableOpacity style={styles.button} onPress={SendData} >
        <Text>
          Submit
        </Text>
      </TouchableOpacity>
      
      
    </View></KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:"#0078AA",
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
  },
  input:{
    marginTop:20,
      height:50,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:"space-between",
      width:Dimensions.get("screen").width-20,
      borderWidth:1.5,
      borderRadius:10,
      marginHorizontal:8,
      backgroundColor:'#F6F6F6',
      borderColor:"black",
      paddingHorizontal:10


  },
  img:{
    height:200,
    width:Dimensions.get("screen").width-20,
    borderRadius:3,
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    height: 30,
    backgroundColor:"#3AB4F2",
    borderWidth:1.5,
    borderRadius:5,
    textAlign:'center',
    width:Dimensions.get("screen").width/3,
  }
  

})