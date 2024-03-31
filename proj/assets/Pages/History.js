import React from 'react';
import { StyleSheet, View, Text ,ScrollView } from 'react-native';
import Calendar from './Calendar';
export default function History() {
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false} // Optionally hide the vertical scroll indicator
    >
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='January'
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='February'
        />
      </View>

      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='March'
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='April'
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='May'
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='June'
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='July'
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='August'
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='September'
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='October'
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='November'
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='December'
        />
      </View>
      
    </ScrollView >
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    alignItems:'center',
    paddingTop:'10%',
    paddingBottom:'30%',
    
  },
  text: {
    
  },
  calendarContainer:{
    width:'90%',
    backgroundColor:'white',
    height: 350,
    marginBottom:0,
  }
});