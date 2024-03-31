import React from 'react';
import { StyleSheet, View, Text ,ScrollView } from 'react-native';
import Calendar from './Calendar';
import { useState } from 'react';
export default function History() {
  const [test, setTest] = useState('white')
  const handlePopup = () =>{
    setTest('blue')
  }
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false} // Optionally hide the vertical scroll indicator
    >
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='January'
          clicked = {handlePopup}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='February'
          clicked = {handlePopup}
        />
      </View>

      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='March'
          clicked = {handlePopup}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='April'
          clicked = {handlePopup}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='May'
          clicked = {handlePopup}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='June'
          clicked = {handlePopup}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='July'
          clicked = {handlePopup}
          
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='August'
          clicked = {handlePopup}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='September'
          clicked = {handlePopup}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='October'
          clicked = {handlePopup}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='November'
          clicked = {handlePopup}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='December'
          clicked = {handlePopup}
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