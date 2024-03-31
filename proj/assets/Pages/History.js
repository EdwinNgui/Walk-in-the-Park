import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Calendar from './Calendar';
export default function History() {
  return (
    <View style={styles.container}>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='February'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    
    height:'100%',
    display:'flex',
    backgroundColor: 'lightblue',
    alignItems:'center',
  },
  text: {
    
  },
  calendarContainer:{
    width:'80%',
    backgroundColor:'red'
  }
});