import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Images } from '../Assets/images';

export function ConstantBackground(props) {
    const { data ,Children} = props
    return (
            <LinearGradient
                style={{
                    flex: 1,
                    // borderRadius: hp(1.5)
                }}

                start={{ x: 0.0, y: 0 }}
                end={{ x: 1.8, y: 0.1 }}
                locations={[0, 0.4, 0.6]}
                colors={['#00BFFF', '#7B68EE', '#7B68EE']}>
                    <SafeAreaView style={{marginHorizontal:17,flex:1}}>

                        {Children}
                    </SafeAreaView>

            </LinearGradient>
    );
}

export default ConstantBackground;

const Styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        // backgroundColor:'black',
        // height: hp(7),
        // flexDirection: 'row',
        // marginTop: hp(2)
    },
    bagroundImageContainer: { height: hp(25), width: wp(100) },
    //   iconStyle: {marginLeft: wp(7), position: 'absolute', marginTop: hp(2)},
    headerText: {
        fontSize: hp(4),
        position: 'absolute',
        marginTop: hp(5),
        marginLeft: wp(7.5),
        color: 'white',
        // fontWeight: '500',
    },
});