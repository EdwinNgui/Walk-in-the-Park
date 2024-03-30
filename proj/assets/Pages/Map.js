import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Map() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this is map page</Text>
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});