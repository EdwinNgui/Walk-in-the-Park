import React, { useRef } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

import PFP from "../TorontoPFP.png";
import PFP1 from "../PFP1.jpg";
import PFP2 from "../PFP2.png";
import PFP3 from "../PFP3.jpg";
import Park from "../park.png";

let backgroundTranslateY = 0;

export default function Profile() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Park} style={[styles.backgroundImage, { transform: [{ translateY: backgroundTranslateY }] }]} blurRadius={10}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        scrollEventThrottle={16}
        onScroll={(event) => {
          let scrollY = event.nativeEvent.contentOffset.y;
          let backgroundTranslateY = scrollY * 0.5;
        }}
      >
        {/* <Image source={Park} blurRadius={10} style={[styles.backgroundImage, { transform: [{ translateY: backgroundTranslateY }] }]} /> */}
        <View style={styles.content}>
          <View style={styles.photoContainer}>
            <Image source={PFP} style={styles.circularPhoto} />
          </View>

          <Text style={styles.name}>Sally the Traveler</Text>

          <View style={styles.xpContainer}>
            <View style={styles.levelCircle}>
              <Text style={styles.level}>3</Text>
            </View>
            <View style={styles.xpBar}>
              <ProgressBar progress={0.7} width={300} height={20} borderRadius={20} color={'#6C5CE7'} />
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
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginTop: 0,
  },
  scrollContainer: {
    // flexGrow: 0,
    // alignItems:'center',
    // paddingTop:'10%',
    // paddingBottom:'30%',
    // backgroundColor:'#fffdef'

    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    zIndex: -1, // Ensure the background image is behind other content
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 200, // Adjust the paddingTop to account for the background image height
  },
  photoContainer: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  level: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  xpBar: {
    flex: 1,
    height: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  descriptionContainer: {
    padding: 20,
    backgroundColor: '#21264a',
    borderRadius: 25,
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
    marginTop: 10
  },
  friendsContainer: {
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  friend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#6580eb',
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
    marginTop: 30,
  },
});
