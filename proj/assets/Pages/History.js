import React from 'react';
import { StyleSheet, View, Text ,ScrollView } from 'react-native';
import Calendar from './Calendar';

export default function History(props) {
  const goBlue = (arr) =>{
    passback(arr)
  }
  const passback = (arr) => props.onOrange(arr);

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false} // Optionally hide the vertical scroll indicator
    >
      <View style = {styles.title}>
            <Text style ={{fontWeight:700, fontSize: 30}}>History</Text>
        </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='January'
          clicked = {(arr) => goBlue(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='February'
          clicked = {(arr) => goBlue(arr)}
        />
      </View>

      <View style = {styles.calendarContainer}>
        <Calendar
      
          year= {2024}
          month='March'
          clicked = {(arr) => goBlue(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='April'
          clicked = {(arr) => goBlue(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='May'
          clicked = {(arr) => goBlue(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='June'
          clicked = {(arr) => goBlue(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='July'
          clicked = {(arr) => goBlue(arr)}
          
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='August'
          clicked = {(arr) => goBlue(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='September'
          clicked = {(arr) => goBlue(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='October'
          clicked = {(arr) => goBlue(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='November'
          clicked = {(arr) => goBlue(arr)}
        />
      </View>
      <View style = {styles.calendarContainer}>
        <Calendar
          year= {2024}
          month='December'
          clicked = {(arr) => goBlue(arr)}
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
    backgroundColor:'#fffdef',
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
  },
  title: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
});