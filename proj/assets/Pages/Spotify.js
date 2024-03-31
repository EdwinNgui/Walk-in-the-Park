import React from 'react';
import { StyleSheet, View, Text , TouchableOpacity, ScrollView} from 'react-native';
import Svg, {Path} from "react-native-svg";
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function Spotify(props) {
  
    const callback = props.navigate;
    const backButton = () => {
      callback();
    }
    
   
    const [reloadKey, setReloadKey] = useState(0);
    const [jsonData, setJsonData] = useState({"culture":"","history":"","latitude":0,"location":["","",""], "longitude":0,"song_info":{
      "album":"","art":"","artist":"","spotify":"https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8?si=96cf615eceb4432a","title":""
    }});
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(props.data);
          setJsonData(response.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); // Call the fetchData function when the effect runs
    }, [reloadKey, props.data]); // Include props.data as a dependency
  
    const reloadComponent = () => {
      setReloadKey(prevKey => prevKey + 1);
    };

    
  return (

    <ScrollView style ={{padding:'20%', paddingBottom:0, paddingLeft:'10%', paddingRight:'10%'}}>
        <TouchableOpacity onPress={backButton}>
          <Svg onPress={backButton} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M3 12H21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12 3L21 12L12 21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
       
        </TouchableOpacity>
        <View style={{backgroundColor:'red'}}>
          <View style = {{display:'flex', justifyContent:'center', flexDirection:'row'}}>
            <Text style={{fontSize:30}}>Your Location:</Text>
            
          </View>
          <View style = {{display:'flex', justifyContent:'center', flexDirection:'row'}}>
            <Text style={{fontSize:22}}>{jsonData.location[0]}</Text>
          </View>
          
        </View>
      

    </ScrollView>
  );
}
