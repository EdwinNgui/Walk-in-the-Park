import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Footer from './assets/Pages/Footer';
import History from './assets/Pages/History';
import Map from './assets/Pages/Map';
import Profile from './assets/Pages/Profile';
import MapComponent from './assets/Pages/MapPin';
export default class App extends React.Component {
  state = {
    page: 'History',
  }

  render() {
    const { page } = this.state;
    let currentPage = null;

    if (page === 'History') {
      currentPage = (
      <>
        <View style = {styles.mapContainer}>
          <MapComponent/>
        </View>
        <View style = {styles.pageContainer}>
        <History></History>
        </View>
      </>
      );
    } else if (page === 'Map') {
      currentPage = <Map />;
    } else if (page === 'Profile') {
      currentPage = <Profile />;
    }

    return (
      <View style={styles.container}>
        <Footer onButtonPress={this.handleButtonPress} />
        {currentPage}
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
    backgroundColor: 'orange',
  },
  text:{
    display: 'flex',

  },
  mapContainer:{
    height:'50%'
  },
  pageContainer:{
    height:'50%'
  }
});