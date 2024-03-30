import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Footer from './assets/Pages/Footer';
import History from './assets/Pages/History';
import Map from './assets/Pages/Map';
import Profile from './assets/Pages/Profile';
import Camera from './assets/Pages/Camera';

export default class App extends React.Component {
  state = {
    page: 'History',
  }

  render() {
    const { page } = this.state;
    let currentPage = null;

    if (page === 'History') {
      currentPage = <History />;
    } else if (page === 'Map') {
      currentPage = <Map onButtonPress={this.handleButtonPress}/>;
    } else if (page === 'Profile') {
      currentPage = <Profile />;
    }else if (page === 'Camera'){
      currentPage = <Camera/>;
    }

    return (
      <View style={styles.container}>
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
    flex: 1,
    backgroundColor: '#fff',
  },
});