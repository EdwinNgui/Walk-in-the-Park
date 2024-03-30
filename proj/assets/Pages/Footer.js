import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Footer({ onButtonPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onButtonPress('Profile')}>
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onButtonPress('Map')}>
        <Text style={styles.text}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onButtonPress('History')}>
        <Text style={styles.text}>History</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
