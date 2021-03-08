import React, { useContext, useState, useEffect, } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import MyButton from '../components/button';
import Input from '../components/input';
import { UserContext } from '../Context/userContext';

const Form = ({ children, title }) => {


    /*    const { nameInput, emailInput, passwordInput, dataInput } = useContext(UserContext);
       const [press, setPress] = useState(null);
   
       const handlePress = () => {
           setPress(true);
       }
   
       useEffect(() => {
           if (press) {
               const req = fetch("http://localhost:8000/users", {
                   method: "POST",
                   headers: {
                       "Content-type": "application/json",
                   },
                   body: JSON.stringify({
                       name: nameInput[0],
                       email: emailInput[0],
                       password: passwordInput[0],
   
                   })
               }).then(async (res) => {
                   console.log("I've been called...")
                   const response = await res.json();
                   if (response) {
                       console.log(response);
                       dataInput[1](true)
                   }
               })
                   .catch(err => console.log(err))
           }
   
   
   
       }, [press]) */


    return (
        <View style={styles.container}>
            <View style={styles.registerContainer}>
                <Text style={styles.register}>{title}</Text>
            </View>

            <View style={styles.backdrop} >
                {children}



            </View>

        </View>






    );
}
const styles = StyleSheet.create({


    container: {
        position: "relative",
        height: "100%",
        backgroundColor: "dodgerblue",
    },
    registerContainer: {
        marginTop: 70,
        alignItems: "center",
    },
    register: {
        fontSize: 33,
        color: "white",
    },

    backdrop: {

        alignItems: "center",
        position: "absolute",
        padding: 40,
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        borderRadius: 60,
        marginTop: 10,
        top: 200,


    },

})
export default Form;