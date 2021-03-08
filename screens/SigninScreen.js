import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { UserContext } from '../Context/userContext';
import Form from '../components/form';
import Input from '../components/input';
import MyButton from '../components/button';

const SigninScreen = ({ navigation }) => {
    const { emailInput } = useContext(UserContext);
    return console.log(emailInput[0] + ' email here..') || (

        <Form title="Welcome Back!">
            <View style={styles.inputContainer}>
                <Input
                    style={styles.input}
                    placeholder="email"
                    onChangeText={(e) => emailInput[1](e)}
                />
                <View style={{ width: "100%", height: 1, backgroundColor: "#DCDCDC" }} />
            </View>
            <MyButton input="Sign In" onPress={() => navigation.navigate("register")} />
        </Form>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "50%",
        width: "100%",

    },
    input: {
        fontSize: 24,
    }
})
export default SigninScreen;