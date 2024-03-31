import React from 'react';
import { StyleSheet, View, Text , TouchableOpacity, ScrollView,Image,Linking} from 'react-native';
import Svg, {Path} from "react-native-svg";
import { useState,useEffect,useRef } from 'react';
import axios from 'axios';

export default function Spotify(props) {
    const scrollViewRef = useRef(null);
    const callback = props.navigate;
    const callback0 = props.navigate0;
    const backButton = () => {
      props.data.includes("get_song") ? callback() : callback0();
    }
    
    const handlePress = () => {
      scrollViewRef.current.scrollToEnd({ animated: true });
    };
  
    const [reloadKey, setReloadKey] = useState(0);
    const [jsonData, setJsonData] = useState({"culture":"","history":"","latitude":0,"location":["","",""], "longitude":0,"song_info":{
      "album":"","art":"https://thebowlcut.com/cdn/shop/t/41/assets/loading.gif?v=157493769327766696621701744369","artist":"","spotify":"https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8?si=96cf615eceb4432a","title":""
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

    <ScrollView style ={{padding:'20%', paddingBottom:0, paddingLeft:'10%', paddingRight:'10%',flexGrow: 0,zIndex:5}} ref={scrollViewRef}>
        <TouchableOpacity onPress={backButton} style={{alignSelf:'flex-end'}}>
          <Svg onPress={backButton} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M3 12H21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12 3L21 12L12 21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
       
        </TouchableOpacity>
        <View>
          <View style = {{display:'flex', justifyContent:'center', flexDirection:'row', marginTop: 10}}>
            <Text style={{fontSize:25}}>Your Location:</Text>
            
          </View>
          <View style = {{display:'flex', justifyContent:'center', flexDirection:'row'}}>
            <Text style={{fontSize:50, fontWeight: 'bold', justifyContent: 'center', color: '#de1502'}}>{jsonData.location[0]}</Text>
          </View>

          <View style = {{display:'flex', justifyContent:'center', flexDirection:'row', paddingTop:40, marginBottom:30}}>
            <Image style={{width:380,height:380,shadowColor: 'black',shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.3,shadowRadius: 4,}} source={{uri:jsonData.song_info.art}}></Image>
          </View>
          <View style={{display:'flex', flexDirection:'column'}}>
            <Text style={{fontSize:25, fontWeight:600,marginBottom:5}}>{jsonData.song_info.title}</Text>
            <Text style={{fontSize:15, fontWeight:500,marginBottom:20}}>{jsonData.song_info.artist}</Text>
            
          </View>
          <View style = {{display:'flex',paddingLeft:30,alignItems:'center', flexDirection:'row', backgroundColor:'black', height:60, width:'80%',borderRadius:20, marginBottom:15, }}>
            <TouchableOpacity onPress={() => Linking.openURL(jsonData.song_info.spotify)} style={{ gap:28,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'row',shadowColor: 'black',shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.3,shadowRadius: 4,}}>
              
              <Text style={{color:'white',fontWeight:600,fontSize:20}}>Listen on Spotify</Text>
           
              <Image style={{width:40, height:40}}source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"}}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{display:'flex',flexDirection:'row', gap:20}}>
        <View style={{paddingTop:3}}>
          <Text style={{fontSize:17,fontWeight:500}}>Learn More</Text>
        </View>
        <TouchableOpacity onPress={handlePress}>
          <Image source={{uri:"https://static.thenounproject.com/png/1123247-200.png"}} style={{width:30,height:30}}></Image>
        </TouchableOpacity>

        </View>

        <View style ={{paddingTop:30, marginBottom:15}}>
          <View style={{backgroundColor: '#2d3b91', borderRadius: 15, padding: 20}}>
            <Text style={{fontWeight:600, marginBottom: 5, fontSize: 20, color: 'white', fontWeight: '900'}}>Communities</Text>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{jsonData.culture}</Text>
          </View>
        </View>

        <View>
          <View style={{backgroundColor: '#2d3b91', borderRadius: 15, padding: 20}}>
            <Text style={{fontWeight:600, marginTop: 15, marginBottom: 10, fontSize: 20, color: 'white', fontWeight: '900'}}>Challenges Faced and Empowerment</Text>
            <Text style={{color: 'white', fontWeight: 'bold', marginBottom: 10}}>{jsonData.history}</Text>
          </View>
        </View>
        <View style={{height:200}}></View>


    </ScrollView>
  );
}