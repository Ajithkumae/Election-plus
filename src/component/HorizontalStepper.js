import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class HorizontalStepper extends Component {
  render() {
    const { data, payment } = this.props
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: wp(7.5),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:'center'
        }}>

        <View
          style={[styles.circleView ,{backgroundColor:'blue'}]}
          
          />
         
       
      
        <View
          style={[styles.circleView]}
          
          />
         
       
        <View
          style={[styles.circleView]}
          
          />
         
       
        <View
          style={[styles.circleView]}
          
         />
         
       
      </View>
     
    );
  }
}

// { color: data >= 2 ? color.orange : color.white }

const styles = StyleSheet.create({
  circleView: {
    height:15,
    width: 15,
    margin:wp(1),
    borderRadius: wp(5),
    borderWidth: 1.5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "white",
  },
 
});
