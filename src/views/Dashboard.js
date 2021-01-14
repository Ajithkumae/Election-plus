import React, { Component } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Images } from '../Assets/images';
import Header from '../component/headder';
import LinearGradient from 'react-native-linear-gradient'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: [{ title: "Total Vote", value: "500" },
            { title: "Total Entry", value: "50" },
            { title: "Positive", value: "100" },
            { title: "Negative", value: "100" },
            { title: "Complaints", value: "000" }
            ]
        };
    }

    render() {
        console.log(this.props)
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <ImageBackground source={Images.BackgroundImage} style={{ flex: 1 }}>

                    <Header navigation={this.props} />
                  
                    <ScrollView style={{ flex: 1, marginTop: hp(20) }}
                        showsVerticalScrollIndicator={false}>
                        {
                            this.state.data.map((item, index) =>
                                <View key={index} style={{ paddingBottom: 20, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(7) }}>
                                    <Text style={{ fontSize: hp(4), color: 'white' }}>{item.title}</Text>
                                    <LinearGradient
                                        style={{ width: wp(30),    
                                        borderRadius: hp(1.5) }}

                                        start={{ x: 0.0, y: 0 }}
                                        end={{ x: 1.8, y: 0.1 }}
                                        locations={[0, 0.4, 0.6]}
                                        colors={['#00BFFF', '#7B68EE','#7B68EE']}>

                                        <TouchableOpacity style={{ padding: 10, }}>
                                            <Text style={{
                                                fontSize: hp(3),
                                                color: 'white',
                                                alignSelf: 'center'
                                            }}>
                                                {item.value}
                                            </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                            )
                        }
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
