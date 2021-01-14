import React, { Component } from 'react';
import { View, Text, ImageBackground ,ScrollView,TouchableOpacity} from 'react-native';
import { Images } from '../Assets/images';
import Header from '../component/headder';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'


export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: [{ title: "Vinay", value: "" },
            { title: "Rahul", value: "" },
            { title: "Harsh", value: "" },
            { title: "Ajith", value: "" }
            ]
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={Images.BackgroundImage} style={{ flex: 1 }}>

                    <Header navigation={this.props}/>
                    <ScrollView style={{ flex: 1 ,marginTop:hp(10)}}
                        showsVerticalScrollIndicator={false}>
                        {
                            this.state.data.map((item, index) =>
                                <View key={index} style={{ paddingBottom: 20  ,flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(7)}}>
                                    <Text style={{fontSize:hp(4),color:'white'}}>{item.title}</Text>
                                    <LinearGradient
                                        style={{ width: wp(20),    
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
            </View>
        );
    }
}
