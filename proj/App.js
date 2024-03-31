import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Footer from './assets/Pages/Footer';
import History from './assets/Pages/History';
import Profile from './assets/Pages/Profile';
import MapComponent from './assets/Pages/Map';
import Header from './assets/Pages/Header';
import InfoCard from './assets/Pages/InfoCard';
import Spotify from './assets/Pages/Spotify';
export default class App extends React.Component {
  state = {
    page: 'History',
  }

  render() {
    const { page } = this.state;
    let currentPage = null;
<<<<<<< Updated upstream
    const handlePassback = () =>{
      console.log("Pressed")
    }
=======
    const moveInfo = (arr) => {
      this.setState({ page: 'Spotify', infoCardData: arr });
    }
    

>>>>>>> Stashed changes
    if (page === 'History') {
      currentPage = <History  onOrange = {(arr) => moveInfo(arr)}/>;
    } else if (page === 'Map') {
      currentPage = (
        <>
          <View style = {styles.mapContainer}>
            <MapComponent navigate = {() => handlePassback()}/>
          </View>
          <View style = {styles.pageContainer}>
      
          </View>
        </>
        );
    } else if (page === 'Profile') {
      currentPage = <Profile />;
    }
    else if (page === 'Spotify') {
      currentPage = <Spotify data={this.state.infoCardData} />;
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