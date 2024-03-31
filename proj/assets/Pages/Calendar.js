import React from 'react'
import {Text, View, StyleSheet} from 'react-native';
const Calendar = (props) => {
    const year = props.year;
    const month = props.month;
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

    return (
        <View style = {styles.calendarStyles}>
            <Text>{year} {month} </Text>
            <Text>{getFirstDayOfWeek(year,month)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    calendarStyles: {
      display:'flex',

      alignItems:'center',
    },
    text: {
      
    },
});
export default Calendar