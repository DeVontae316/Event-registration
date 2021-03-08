
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';



import SigninScreen from '../screens/SigninScreen'
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();



const Login = () => {
    return (
        <Stack.Navigator

        >
            <Stack.Screen options={{
                headerShown: false,

            }} name="register" component={RegisterScreen} />
            <Stack.Screen options={{
                headerTitleStyle: {
                    color: "white",
                },
                headerBackTitleStyle: {
                    color: "white",
                },

                headerStyle: {
                    backgroundColor: "dodgerblue"
                },
                headerShown: true
            }} name="signin" component={SigninScreen} />

        </Stack.Navigator>
    )
}

export default Login;