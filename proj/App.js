import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';
import Map from './Map';


export default App = () => {
  const [test,setTest] = useState("hello");
  
  const change = () =>{
    setTest("Hello World!")
  }
  
  return (
    <View style={styles.container}>
      <Map/>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>is this working ajsdaksdklj</Text>
      <Text>klxedj</Text>
      <Text>a</Text>
      <Text>{test}</Text>
      <Button title="Change Text" onPress={change} />
      <Map/>
      <StatusBar style="auto" />
      
    </View>
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
