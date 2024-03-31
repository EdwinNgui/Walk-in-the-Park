import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
const Spotify = (props) => {
  return (
    <View style = {{display:'flex' , justifyContent:'center', alignItems:'center', paddingTop:300}}>

        <Text>{props.data}</Text>

    </View>
  )
}

export default Spotify