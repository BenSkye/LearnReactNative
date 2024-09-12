import * as React from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';

const viewStyle: ViewStyle = {
    backgroundColor: '#F4CE14',
};

const textStyle: TextStyle = {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    padding: 25
};

const LittleLemonHeader: React.FC = () => {
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                Welcome to Little Lemon
            </Text>
        </View>
    );
};

export default LittleLemonHeader;
