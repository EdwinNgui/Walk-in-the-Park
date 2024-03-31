import React from 'react'
import {Text, View, StyleSheet} from 'react-native';
import { useState } from 'react';

const Calendar = (props) => {
    const [popup, setPopup] = useState(false);
    const [date0, setDate0] = useState([0,0,0]);
    const year = props.year;
    const month = props.month;
    const activeDates = {
        'January' : [1,2,3],
        'February' : [10,11,12], 
        'March' : [31],
        'April' : [],
        'May' : [],
        'June' : [],
        'July' : [],
        'August' : [],
        'September' :[11],
        'October': [],
        'November' : [],
        'December': [11]
    }
    const monthToInt = {
        'january': 0,
        'february':1,
        'march':2,
        'april':3,
        'may':4,
        'june':5,
        'july':6,
        'august':7,
        'september':8,
        'october':9,
        'november':10,
        'december':11,
    }
    const getFirstDayOfWeek = (year, month) => {
        const firstDayOfMonth = new Date(year, monthToInt[month.toLowerCase()], 1);
        return firstDayOfMonth.getDay();
    }
    const getDaysInMonth = (year,month) =>{
        if (monthToInt[month.toLowerCase()] === 1){
            return 29;
        }
        const lastDayOfMonth = new Date(year, monthToInt[month.toLowerCase()]+1, 0);
        // Return the day of the month, which gives the number of days in the month
        return lastDayOfMonth.getDate();
    }
    const getMonthNumber = monthName => {
        const months = {
          "January": "01",
          "February": "02",
          "March": "03",
          "April": "04",
          "May": "05",
          "June": "06",
          "July": "07",
          "August": "08",
          "September": "09",
          "October": "10",
          "November": "11",
          "December": "12"
        };
      
        return months[monthName];
      };
      
    const daysLg = Array(getFirstDayOfWeek(year,month)).fill(0).concat([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 ,21,22,23,24,25,26,27,28,29,30 ,31])
    const daysSm = Array(getFirstDayOfWeek(year,month)).fill(0).concat([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 ,21,22,23,24,25,26,27,28,29,30])
    const daysFe = Array(getFirstDayOfWeek(year,month)).fill(0).concat([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 ,21,22,23,24,25,26,27,28,29])
    const passback = (arr) => props.clicked(arr);
    const handleClick = (m,y,d) =>{
        setPopup(true);
        setDate0([m,y,d])
        passback(`http://100.67.202.66:6450/get_marker?year=${y}&month=${getMonthNumber(m)}&day=${d}`)
    }
    

    const rendewhiteDivsLg = daysLg.map((text, index) => (
        !activeDates[month].includes(text) ? 
        <View key={index} style={text !== 0 ? {display:'flex', justifyContent:'center', alignItems:'center',  width: 35,height:30, backgroundColor : 'white' } : {pointerEvents: 'none',display:'flex', justifyContent:'center', alignItems:'center',  width: 35,height:30, backgroundColor : 'white' }}>
            <Text style = {text !== 0 ? {color : 'black'} : {color : 'white'}}>{text}</Text>
        </View>
        :
        <View key={index} onTouchEnd={() => handleClick(month,year,text)}  style={text !== 0 ? {display:'flex', justifyContent:'center', alignItems:'center',  width: 35,height:30, borderRadius: 20, backgroundColor : '#6580eb' } : {pointerEvents: 'none',display:'flex', justifyContent:'center', alignItems:'center',  width: 35,height:30, backgroundColor : 'white' }}>
            <Text style = {text !== 0 ? {color : 'black'} : {color : 'white'}}>{text}</Text>
        </View>
        ));
    const rendewhiteDivsSm = daysSm.map((text, index) => (
        !activeDates[month].includes(text) ? 
        <View key={index} style={text !== 0 ? {display:'flex', justifyContent:'center', alignItems:'center',  width: 35,height:30, backgroundColor : 'white' } : {pointerEvents: 'none',display:'flex', justifyContent:'center', alignItems:'center',  width: 35,height:30, backgroundColor : 'white' }}>
            <Text style = {text !== 0 ? {color : 'black'} : {color : 'white'}}>{text}</Text>
        </View>
        :
        <View key={index}  onTouchEnd={() => handleClick(month,year,text)} style={text !== 0 ? {display:'flex', justifyContent:'center', alignItems:'center',  width: 35,height:30, borderRadius: 20, backgroundColor : '#6580eb' } : {pointerEvents: 'none',display:'flex', justifyContent:'center', alignItems:'center',  width: 35,height:30, backgroundColor : 'white' }}>
            <Text style = {text !== 0 ? {color : 'black'} : {color : 'white'}}>{text}</Text>
        </View>
        ));
    const rendewhiteDivsFe = daysFe.map((text, index) => (
        !activeDates[month].includes(text) ? 
        <View key={index} style={text !== 0 ? {display:'flex', justifyContent:'center', alignItems:'center',  width: 35,height:30, backgroundColor : 'white' } : {pointerEvents: 'none',display:'flex', justifyContent:'center', alignItems:'center',  width: 35,height:30, backgroundColor : 'white' }}>
            <Text style = {text !== 0 ? {color : 'black'} : {color : 'white'}}>{text}</Text>
        </View>
        :
        <View key={index}  onTouchEnd={() => handleClick(month,year,text)} style={text !== 0 ? {display:'flex', justifyContent:'center', alignItems:'center',  width: 35,height:30, borderRadius: 20, backgroundColor : '#6580eb' } : {pointerEvents: 'none',display:'flex', justifyContent:'center', alignItems:'center',  width: 35,height:30, backgroundColor : 'white' }}>
            <Text style = {text !== 0 ? {color : 'black'} : {color : 'white'}}>{text}</Text>
        </View>
        ));
    

    const renderDays = (year,month) =>{
        if (getDaysInMonth(year,month) === 29){
            return rendewhiteDivsFe;
        }
        else if (getDaysInMonth(year,month) === 30){
            return rendewhiteDivsSm;
        }
        return rendewhiteDivsLg;
    }
    return (
        <View style = {styles.calendarStyles}>
            <View style = {{paddingTop:'5%', display:"flex",flexDirection:'row',justifyContent:'center'}}>
                <Text style ={{fontWeight:700, fontSize: 20}}>{month} {year} </Text>
            </View>
            <View style = {{display:'flex',flexDirection:'row', gap:23.5,paddingLeft:18, paddingTop:20}}>
                <Text>Sun</Text>
                <Text>Mon</Text>
                <Text>Tue</Text>
                <Text>Wed</Text>
                <Text>Thr</Text>
                <Text>Fri</Text>
                <Text>Sat</Text>
            </View>
            <View>
            <View style ={{paddingLeft:12, paddingRight:8,display: 'flex', flexDirection:'row',flexWrap:'wrap', padding:20 , gap:13}}>{renderDays(year,month)}</View>
            </View>
        </View>
    )   
}

const styles = StyleSheet.create({
    calendarStyles: {
      width:'100%',
      height:"100%",
      display:'flex',
      flexDirection:'column'
    },
    title: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingTop: 20,
      paddingBottom: 20,
    },
    text: {
      
    },
});
export default Calendar