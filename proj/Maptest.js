import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View} from 'react-native';
import { useState } from 'react';

export default function MapTest() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);


  const latlng = { latitude: 37.78825, longitude: -122.4324 };
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker coordinate={latlng} title="Marker Title" description="Marker Description" />
      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
