import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Footer from './assets/Pages/Footer';
import History from './assets/Pages/History';
import Profile from './assets/Pages/Profile';
import MapComponent from './assets/Pages/Map';
import Header from './assets/Pages/Header';
import Spotify from './assets/Pages/Spotify';
export default class App extends React.Component {
  state = {
    page: 'Map',
  }

  render() {
    const { page } = this.state;
    let currentPage = null;

    const handlePassback = (lat,lng) =>{
      this.setState({ page: 'Spotify', infoCardData: `http://100.67.202.66:6450/get_song?lat=${lat}&long=${lng}` });
    }

    const moveInfo = (arr) => {
      this.setState({ page: 'Spotify', infoCardData: arr });
    }

    const backToMap = () => {
      this.setState({ page: 'Map' });
    }

    const backToHistory = () => {
      this.setState({ page: 'History' })
    }

    if (page === 'History') {
      currentPage = <History  onOrange = {(arr) => moveInfo(arr)}/>;
    } else if (page === 'Map') {
      currentPage = (
        <>
          <View style = {styles.mapContainer}>
            <MapComponent navigate = {(lat,lng) => handlePassback(lat,lng)}/>
          </View>
          <View style = {styles.pageContainer}>
      
          </View>
        </>
        );
    } else if (page === 'Profile') {
      currentPage = <Profile />;
    }
    else if (page === 'Spotify') {
      currentPage = <Spotify data={this.state.infoCardData} navigate = {backToMap} navigate0 = {backToHistory}/>;
    }
    

    return (
      <View style={styles.container}>
        <Header/>
        {currentPage}
        <Footer onButtonPress={this.handleButtonPress} />
      </View>
    );
  }
  
  handleButtonPress = (page) => {
    this.setState({ page });
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',

  },
  text:{
    display: 'flex',

  },
  mapContainer:{
    height:'100%'
  },
  pageContainer:{
    height:'50%'
  }
});