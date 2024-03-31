import React, { useState, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Button, Text } from 'react-native';
import * as Location from 'expo-location';

export default function MapComponent() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [locStatus, setLocStatus] = useState(false);
  const mapRef = useRef(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    } else {
      let location = await Location.getLastKnownPositionAsync({});
      setLocStatus(true);
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      mapRef.current.animateToRegion(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922, // adjust these values as needed for zoom level
          longitudeDelta: 0.0421, // adjust these values as needed for zoom level
        },
        1500 // duration in milliseconds
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} ref={mapRef}>
          {locStatus ? (
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              title="Marker Title"
              description="Marker Description"
            />
          ) : null}
        </MapView>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.getLocationContainer}>
          <Text onPress={getLocation} style={styles.button}>
            Location
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  mapContainer: {
    height: '80%',
  },
  map: {
    height: '100%',
  },
  buttonContainer: {
    height: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getLocationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    backgroundColor: 'blue',
  },
  button: {},
});
