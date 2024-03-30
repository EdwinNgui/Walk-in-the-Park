import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View , Button, Text} from 'react-native';
import * as Location from 'expo-location';
import { useState } from 'react';
import axios from 'axios';

export default function MapComponent() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [latlng, setLatlng] = useState({ latitude: 0 , longitude: 0});
  const [locStatus, setLocStatus] = useState(false)
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log(`Status: ${status}`);
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }
    else{  
      let location = await Location.getLastKnownPositionAsync ({});
      setLocStatus(true);
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      setLatlng({latitude:location.coords.latitude, longitude:location.coords.longitude});
      console.log(`Location: ${location.coords.latitude} ${location.coords.longitude}`);
    }
  }
  /*
  useEffect(() => {
    const fetchData = async (input_text) => {
      try {
        const apiKey = 'YOUR_API_KEY';
        const apiSecret = 'YOUR_API_SECRET';
        const baseUrl = 'https://api.gemini.com';

        // Make a text-based request to get a text response
        const response = await axios.post(
          `${baseUrl}/v1/text_endpoint`,
          {
            // Your request data if needed
          },
          {
            headers: {
              'Content-Type': 'text/plain',
              'X-GEMINI-APIKEY': apiKey,
              'X-GEMINI-PAYLOAD': input_text,
              'X-GEMINI-SIGNATURE': '',
            },
            auth: {
              username: apiKey,
              password: apiSecret,
            },
          }
        );

        // Set the response text
        setResponseText(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  */
  
  return (
    <View style={styles.container}>
      <View style = {styles.mapContainer}>
        <MapView style={styles.map}>
          {locStatus ? <Marker coordinate={latlng} title="Marker Title" description="Marker Description" /> : <></>}
        </MapView>
      </View>
      <View style = {styles.buttonContainer}>
        <Text onPress={getLocation} style={styles.button}>Location</Text>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height: '100%'
  },
  mapContainer:{
    height:'80%',
  },
  map:{
    height:'100%'
  },
  buttonContainer:{
    height:'20%',
    display:'flex',
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    height:'100%',
    backgroundColor:'blue'
  }
});
