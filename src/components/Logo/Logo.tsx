import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../../../assets/logo.png'

import { styles } from './LogoStyles';

export function Logo() {
  return (
    <View>
   <Text style={styles.title}>DISNEY</Text>

<Image
 source={logo}
style={{
  resizeMode:'contain',
  height:180,
  marginLeft:'auto',
  marginRight: 'auto',
}}
 />

    </View>
  );
}
