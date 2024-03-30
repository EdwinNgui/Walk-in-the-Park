import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PFP from "../TorontoPFP.png";

export default function Profile() {
  const xpPercentage = 70;

  return (
    <View style={styles.container}>
      {/* Large center circular photo */}
      <View style={styles.photoContainer}>
        <Image source={PFP} style={styles.circularPhoto} />
      </View>

      {/* Name in big bold letters */}
      <Text style={styles.name}>Sally the Traveler</Text>

      {/* XP bar with level */}
      <View style={styles.xpContainer}>
        <View style={styles.levelCircle}>
          {/* Circle with red outline */}
          <Text style={styles.level}>3</Text>
        </View>
        <View style={styles.xpBar}>
          {/* XP progress */}
          <View style={[styles.xpProgress, { width: `${xpPercentage}%` }]}></View>
        </View>
      </View>

      {/* Description box */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Sally the Traveler loves learning about her community, and she is passionate about equity, diversity, and inclusion.</Text>
        {/* Rectangle image */}
        <View style={styles.imageContainer}>
          {/* Your image component goes here */}
          <View style={styles.rectangleImage}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 80,
  },
  photoContainer: {
    marginBottom: 20,
  },
  circularPhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'lightgray',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  xpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelCircle: {
    width: 50,
    height: 50,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#F7BD45',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1, // Ensure the circle is rendered on top of the bar
    marginRight: -20, // Adjust for overlap
    marginLeft: 10, // Add spacing between circle and bar
    backgroundColor: '#FEEC65',
  },
  level: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  xpBar: {
    flex: 1,
    height: 20,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    overflow: 'hidden', // Clip children
    marginRight: 10,
  },
  xpProgress: {
    height: '100%',
    backgroundColor: '#E2E535', // Make the XP bar the specified yellow
  },
  descriptionContainer: {
    padding: 20,
    backgroundColor: '#E2E2E2',
    borderRadius: 15,
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  rectangleImage: {
    width: 200,
    height: 100,
    backgroundColor: 'lightblue',
  },
});
