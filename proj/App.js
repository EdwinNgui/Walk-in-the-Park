import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Footer from './assets/Pages/Footer';
import History from './assets/Pages/History';
import Profile from './assets/Pages/Profile';
import MapComponent from './assets/Pages/Map';
import Header from './assets/Pages/Header';
export default class App extends React.Component {
  state = {
    page: 'History',
  }

  render() {
    const { page } = this.state;
    let currentPage = null;

    if (page === 'History') {
      currentPage = <History/>;
    } else if (page === 'Map') {
      currentPage = (
        <>
          <View style = {styles.mapContainer}>
            <MapComponent/>
          </View>
          <View style = {styles.pageContainer}>
      
          </View>
        </>
        );
    } else if (page === 'Profile') {
      currentPage = <Profile />;
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