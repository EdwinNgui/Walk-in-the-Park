import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function History() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this is history page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    display:'flex',
    backgroundColor: 'lightblue',
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});