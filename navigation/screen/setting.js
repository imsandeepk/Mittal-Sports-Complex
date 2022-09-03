import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Setting({navigation}) {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>No Live Match at this moment</Text>
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
  text:{
    justifyContent:'center',
    alignSelf:'center',
    fontSize:17,
    fontWeight:"400",

  }

})