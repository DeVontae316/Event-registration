import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { UserContext } from '../Context/userContext';
import Form from '../components/form';
import Input from '../components/input';
import MyButton from '../components/button';


const RegisterScreen = ({ navigation }) => {
    const { nameInput, emailInput, occupationInput, authInput, idInput } = useContext(UserContext);
    const handleRegister = async () => {
        const req = await fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: nameInput[0],
                email: emailInput[0],
                occupation: occupationInput[0],
            })
        });
        const res = await req.json();

        if (res) {
            console.log("payload below:")
            console.log(res);
            idInput[1](res.id)
            authInput[1](true);

        }
    }
    return (
        <Form title="Register">
            <View style={styles.inputContainer}>

                <View style={styles.inputStyle} >
                    <Input
                        style={styles.font}
                        placeholder={"name"}
                        onChangeText={(e) => nameInput[1](e)}
                    />
                    <View style={{ width: "100%", height: 1, backgroundColor: "#DCDCDC" }} />
                </View>

                <View style={styles.inputStyle} >
                    <Input
                        style={styles.font}
                        placeholder={"email"}
                        onChangeText={(e) => emailInput[1](e)}
                    />
                    <View style={{ width: "100%", height: 1, backgroundColor: "#DCDCDC" }} />
                </View>

                <View style={styles.inputStyle} >
                    <Input
                        style={styles.font}
                        placeholder={"occuaption"}
                        onChangeText={(e) => occupationInput[1](e)}
                    />
                    <View style={{ width: "100%", height: 1, backgroundColor: "#DCDCDC" }} />
                </View>

                <MyButton input="Register" onPress={handleRegister} />
                <MyButton input="Sign in" onPress={() => navigation.navigate("signin")} />

            </View>
        </Form>
    );
}
const styles = StyleSheet.create({
    font: {
        fontSize: 20,
        color: "#11122b",
    },
    inputStyle: {
        marginBottom: 55,

    },
    inputContainer: {
        width: "100%",
        marginTop: 70,
    },

})
export default RegisterScreen;