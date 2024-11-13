import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './EduTextInputStyles';

interface TextInputProps{
    pass:string;
    setPass:(value:String)=> void;
}

export function EduTextInput({pass, setPass}: TextInputProps){
return(
 
<TextInput style={styles.Inputer}
    placeholder='Pass'
    value={pass}
    onChangeText={setPass}
/>

);   
}