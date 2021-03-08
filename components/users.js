import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image } from 'react-native';

const Users = ({ uri, title, subTitle, email }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main_card}>
                <View style={styles.imageContainer}>
                    <Image source={{
                        uri,
                        width: 120,
                        height: 120
                    }} />
                </View>
                <View style={styles.titlesContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.email}>{email}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    imageContainer: {
        position: "absolute",
        top: 20,
        marginBottom: 10,
        borderColor: "#dcdcdc",
        borderRadius: 70,
        borderWidth: 1,
        width: 120,
        height: 120,
        overflow: "hidden",

    },
    main_card: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 300,
        backgroundColor: "white",
        borderRadius: 40



    },
    titlesContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 70
    },
    title: {
        fontSize: 20,
        color: "grey"
    },
    subTitle: {
        color: "black"
    },
    email: {
        color: "dodgerblue"
    },
})
export default Users;