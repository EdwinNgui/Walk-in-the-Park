import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

import PFP from "../TorontoPFP.png";
import PFP1 from "../PFP1.jpg";
import PFP2 from "../PFP2.png";
import PFP3 from "../PFP3.jpg";

export default function Profile() {

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={PFP} style={styles.circularPhoto} />
      </View>

      <Text style={styles.name}>Sally the Traveler</Text>

      <View style={styles.xpContainer}>
        <View style={styles.levelCircle}>
          <Text style={styles.level}>3</Text>
        </View>
        <View style={styles.xpBar}>
          <ProgressBar progress={0.2} width={300} height={20} borderRadius={20} color={'#6C5CE7'} />
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Hey! I'm Sally the Traveler and I really love learning about my community. I'm also super passionate about equity, diversity, and inclusion.</Text>
        <Text style={styles.headerText}>Friends List</Text>
        <View style={styles.friendsContainer}>
          <View style={styles.friend}>
            <Image source={PFP1} style={styles.friendImage} />
            <Text style={styles.friendName}>Wall-E the Friend</Text>
          </View>
          <View style={styles.friend}>
            <Image source={PFP2} style={styles.friendImage} />
            <Text style={styles.friendName}>LeBron James</Text>
          </View>
          <View style={styles.friend}>
            <Image source={PFP3} style={styles.friendImage} />
            <Text style={styles.friendName}>Mecca Barnes</Text>
          </View>
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
    zIndex: 1,
    marginRight: -20,
    marginLeft: 30,
    backgroundColor: '#FEEC65',
  },
  level: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  xpBar: {
    flex: 1,
    height: 20,
  },
  descriptionContainer: {
    padding: 20,
    backgroundColor: '#21264a',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: 30,
    width: '100%',
    paddingTop: 30,
    paddingBottom: 80,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ede3da',
    fontWeight: '500',
  },
  friendsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  friend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#9197bf',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '95%',
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightgray',
    marginRight: 10,
  },
  friendName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#ede3da",
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ede3da',
    textAlign: 'center',
    marginBottom: 3,
    marginTop: 20,
  },
});
