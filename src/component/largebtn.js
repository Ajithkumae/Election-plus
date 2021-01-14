import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Largebutton = (props) => {
    const {
        btntext,
        buttonsty,
        onpress
    } = props
    return (
        <View >
            <LinearGradient
            style={[buttonsty]}
                start={{ x: 0.0, y: 0 }}
                end={{ x: 1.8, y: 0.1 }}
                locations={[0, 0.4, 0.6]}
                colors={['#00BFFF', '#7B68EE', '#7B68EE']}>


                <TouchableOpacity onPress={()=>onpress()}  >
                    <Text style={{ color: 'white', fontSize: hp(3) }}>{btntext}</Text>
                </TouchableOpacity>

            </LinearGradient>

        </View>
    );

}

export default Largebutton