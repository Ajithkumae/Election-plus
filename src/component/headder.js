import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Images } from '../Assets/images';

export function Header(props) {
    console.log(props);
const {data ,navigation}=props
    return (
        <View style={Styles.conatiner}>
            <TouchableOpacity style={{ flex: 1, marginHorizontal: wp(5) }}
            onPress={()=> navigation.navigation.goBack()}
            >

                <Image source={Images.backPng} style={{  height: hp(5), width: wp(10), marginTop: hp(1.2) }} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginRight: wp(5) }}>

                <Image source={Images.usericon} style={{ height: hp(5), width: wp(10), marginTop: hp(1.2), marginRight: wp(7) }} />
                <View>

                    <Image source={Images.bellPng} style={{ height: hp(5), width: wp(10), marginTop: hp(1.2) }} />
                    <View style={{
                        position: 'absolute', height: 17, width: 17,
                        borderRadius: 8.5,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        marginRight: hp(1),
                        justifyContent: 'center',
                        alignSelf:'flex-end'

                    }}>
                        <Text style={{fontSize:hp(2)}}>{data}</Text>
                        </View>
                </View>


            </View>
        </View>
    );
}

export default Header;

const Styles = StyleSheet.create({
    conatiner: {
        // flex: 1,
        // backgroundColor:'black',
        height: hp(7),
        flexDirection: 'row',
        marginTop: hp(2)
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