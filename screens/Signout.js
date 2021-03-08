import React, { useContext } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import Form from '../components/form';
import { UserContext } from "../Context/userContext";




const SignOutScreen = () => {
    const { authInput } = useContext(UserContext);

    const handlePress = () => {
        authInput[1](false);
    }
    return (
        <Form>
            <View style={styles.container}>
                <Ionicons name="person" size={64} color="dodgerblue" />
                <View style={styles.goodBye}>
                    <Text style={styles.gb}>Goodbye</Text>
                </View>
                <TouchableOpacity onPress={handlePress}>
                    <View style={styles.signout}>
                        <Text style={styles.so}>Signout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Form>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60%",
    },
    gb: {

        fontSize: 44,
    },
    so: {
        color: "#dcdcdc",
        fontSize: 28,
        fontWeight: "bold",
    },
    signout: {
        marginTop: 20,
    }
})

export default SignOutScreen;