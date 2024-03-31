import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Footer({ onButtonPress }) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
    onButtonPress(buttonName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === 'Profile' && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress('Profile')}>
        <Text style={[styles.text, selectedButton === 'Profile' && styles.selectedText]}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === 'Map' && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress('Map')}>
        <Text style={[styles.text, selectedButton === 'Map' && styles.selectedText]}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === 'History' && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress('History')}>
        <Text style={[styles.text, selectedButton === 'History' && styles.selectedText]}>History</Text>
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
    backgroundColor: '#f0eded',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
    zIndex:10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f5f5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000', // Default text color
  },
  selectedButton: {
    backgroundColor: '#234beb',
  },
  selectedText: {
    color: '#fff', // Text color when button is selected
  },
});
