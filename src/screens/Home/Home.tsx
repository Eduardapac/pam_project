import { StatusBar } from 'expo-status-bar';
import React from "react";
import {View} from 'react-native';
import styles from "./HomeStyles";
import { Logo } from '../../components/Logo/Logo';

import { Button } from '../../components/Button/Button';

export default function Home(){
    return(
      <View style={styles.appcontainer}>
        <View style={styles.logoContainer}>
        <Logo/>
        </View>

<View style={styles.inputContainer}>
 
  <Button/>
</View>


        
        <StatusBar style="light" />
      </View>
        
    );
}
    
