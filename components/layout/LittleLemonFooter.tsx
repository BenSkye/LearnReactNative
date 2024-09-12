import * as React from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';

const viewStyle: ViewStyle = {
  backgroundColor: '#F4CE14',
};

const textStyle: TextStyle = {
  fontSize: 18,
  color: 'black',
  textAlign: 'center',
};

const LittleLemonFooter: React.FC = () => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
};

export default LittleLemonFooter;