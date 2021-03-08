import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';


const Input = ({ onChangeText, style, placeholder, ...other }) => {
    return (
        <TextInput
            style={style}
            {...other}
            onChangeText={onChangeText}
            placeholder={placeholder}
        />
    );
}
const styles = StyleSheet.create({
    container: {},
})
export default Input;