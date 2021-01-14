import React from 'react';
import { View, Text, TextInput } from 'react-native';

import LinearGradentLine from './linearGradientline';

const Textbox = (props) => {
    const { texthedder,
        placeholder,
        secureTextEntry,
        headdersty,
        textsty,
        onlytitle,
        handleFocus,
        borderhighlight,
        onChangeText,
        value,
        keyboardType
    } = props
    return (
        <View >
            <Text style={headdersty}>
                {texthedder}
            </Text>{
                !onlytitle &&
                <View>
                    <TextInput style={textsty}
                        placeholderTextColor="gray"
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        onFocus={() => handleFocus()}
                        onChangeText={(val) => onChangeText(val)}
                        value={value}
                        keyboardType={keyboardType}
                    />
                    {
                        borderhighlight ?
                            <LinearGradentLine />
                            : <View style={{ height: 1.5, backgroundColor: "gray" }} />
                    }
                </View>
            }


        </View>
    );

}

export default Textbox