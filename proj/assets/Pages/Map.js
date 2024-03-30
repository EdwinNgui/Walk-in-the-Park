import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Map({ onButtonPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the map page</Text>
      <TouchableOpacity style={styles.button} onPress={() => onButtonPress('Camera')}>
        <Text style={styles.buttonText}>Go to Camera</Text>
      </TouchableOpacity>
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
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
