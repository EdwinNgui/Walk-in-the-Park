import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
const Spotify = (props) => {
  return (
    <View style = {{display:'flex' , justifyContent:'center', alignItems:'center'}}>
        <Text>Testing</Text>
        <Text>Testing</Text>


        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>{props.data}</Text>

    </View>
  )
}

export default Spotify