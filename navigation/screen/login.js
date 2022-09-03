import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View,Dimensions, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { auth } from '../../firebase'


export default function Login() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigatio = useNavigation()
    useEffect(()=>{
        const unsub=auth.onAuthStateChanged(user=>{
            if(user){
                navigatio.navigate("Main")
                
            }
        })
        return unsub
    },[])
    const handlesignup=()=>{
        auth.createUserWithEmailAndPassword(Email,Password).then(userCredentials => {
            const user = userCredentials.user;
            alert("You have been registered!")
            console.log(user.email);
        }).catch(error=>alert(error.message))
        
        
    }
    const handlelogin=()=>{
        auth.signInWithEmailAndPassword(Email,Password).then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        }).catch(error=>alert(error.message))

    }
  return (
    
        <View style={styles.main}>
            <Image style={styles.img} source={require("../../assets/images/msc.png")}/>
            <TextInput style={styles.input}
             placeholder='Email-ID'
             value={Email} 
             onChangeText={text=>setEmail(text)}/>
            <TextInput style={styles.input} 
             placeholder='Password'
             value={Password} 
             onChangeText={text=>setPassword(text)}
            secureTextEntry />
            <TouchableOpacity 
            onPress={handlelogin} style={styles.button}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={handlesignup}
            style={styles.button}>
                <Text>Register</Text>
                
            </TouchableOpacity>
            <Text style={styles.text}>Not having an account?</Text>
                <Text>Enter your Creds and click Register you will be registered.</Text>
            


            
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
      input:{
        marginTop:35,
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
      },
      img:{
        height:200,
        width:Dimensions.get("screen").width-20,
        borderRadius:3,
      },
      text:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:17,
        fontWeight:"400",
    
      }
})