import React from 'react';
import { StyleSheet, View, Text ,ScrollView } from 'react-native';
import Calendar from './Calendar';

export default function History(props) {
  const goOrange = (arr) =>{
    passback(arr)
  }
  const passback = (arr) => props.onOrange(arr);

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false} // Optionally hide the vertical scroll indicator
    >
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='January'
          clicked = {(arr) => goOrange(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='February'
          clicked = {(arr) => goOrange(arr)}
        />
      </View>

      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='March'
          clicked = {(arr) => goOrange(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='April'
          clicked = {(arr) => goOrange(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='May'
          clicked = {(arr) => goOrange(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='June'
          clicked = {(arr) => goOrange(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='July'
          clicked = {(arr) => goOrange(arr)}
          
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='August'
          clicked = {(arr) => goOrange(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='September'
          clicked = {(arr) => goOrange(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='October'
          clicked = {(arr) => goOrange(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='November'
          clicked = {(arr) => goOrange(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='December'
          clicked = {(arr) => goOrange(arr)}
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
    backgroundColor:'#fffdef'
  },
  text: {
    
  },
  calendarContainer:{
    width:'90%',
    paddingLeft:12,
    backgroundColor:'white',
    height: 380,
    marginBottom:30,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  }
});