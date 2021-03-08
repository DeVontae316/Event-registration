import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { UserContext } from '../Context/userContext';

const Profile = ({ uri, title = "John Doe", subTitle = "Software engineer", email = "fake@gmail.com" }) => {
    const { emailInput, occupationInput, nameInput, picInput } = useContext(UserContext)
    const welcome = "Welcome to our event. We are honored to have use as a guest";
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.welcome} numberOfLines={4}>{welcome}</Text>
                <View style={styles.titlesContainer}>
                    <Text style={styles.title}>{nameInput[0]}</Text>
                    <Text style={styles.subTitle}>{occupationInput[0]}</Text>
                    <View style={{ width: "160%" }}>
                        <Text style={styles.email}>{emailInput[0]}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.imgContainer}>
                <Image style={{ borderRadius: 30, }} source={{
                    uri: picInput[0] && picInput[0],
                    width: 140,
                    height: 120,
                }} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

        height: "100%",
        width: 325,


        flexDirection: "row",
    },
    imgContainer: {
        width: 140,
        height: 120,
        borderRadius: 30,
        backgroundColor: "#dcdcdc",
        overflow: "hidden",
    },
    titleContainer: {
        width: "50%",
    },
    titlesContainer: {
        marginTop: 15
    },
    welcome: {
        fontSize: 22,
    },
    title: {
        fontSize: 20
    },
    subTitle: {
        color: "grey",
        fontWeight: '500',
        fontSize: 18,
    },
    email: {
        color: "dodgerblue",
        fontSize: 18,
    }
})
export default Profile;