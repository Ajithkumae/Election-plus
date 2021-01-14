import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const LinearGradentLine = () => {
    return (
        <View>
            <LinearGradient
                start={{ x: 0.0, y: 0 }}
                end={{ x: 1.8, y: 0.1 }}
                locations={[0, 0.4, 0.6]}
                colors={['#00BFFF', '#7B68EE','#7B68EE']}
                style={{ height:2}}
                
                >
                    
            </LinearGradient>
        </View>
    )

}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
export default LinearGradentLine;
