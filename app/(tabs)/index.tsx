import * as React from 'react';
import { View, ViewStyle, Text } from 'react-native';

import LittleLemonFooter from '@/components/layout/LittleLemonFooter';
import LittleLemonHeader from '@/components/layout/Header';
import Content from '@/components/layout/Content';
import ListContent from '@/components/layout/ContentList';
import ListContent2 from '@/components/layout/ContentList';


const containerStyle: ViewStyle = {
  flex: 1,

};
const headerContainerStyle: ViewStyle = {
  flex: 0.1,
};

const contentContainerStyle: ViewStyle = {
  backgroundColor: 'green',
  flex: 0.8
};
const footerContainerStyle: ViewStyle = {
  backgroundColor: 'green',
  flex: 0.1
};

const HomeScreen: React.FC = () => {
  return (
    <View style={containerStyle}>
      <View style={headerContainerStyle} >
        <LittleLemonHeader />
      </View>
      <View style={contentContainerStyle} >
        <ListContent2 />
      </View>
      <View style={footerContainerStyle}>
        <LittleLemonFooter />
      </View>
    </View>
  );
};

export default HomeScreen;
