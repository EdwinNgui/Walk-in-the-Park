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