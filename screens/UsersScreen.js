import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useContext, useEffect, useState } from 'react/cjs/react.development';
import Users from '../components/users';
import { UserContext } from '../Context/userContext';

const UsersScreen = () => {


    const [data, setData] = useState();
    useEffect(() => {
        (async () => {
            const req = await fetch("http://localhost:8000/users", {
                method: "GET"
            });
            const res = await req.json();
            if (res) {
                setData(res);
                console.log("payload below:")
                console.log(res)

            }
        })()
    }, [])
    return (
        <View style={styles.container}>

            <FlatList
                data={data}
                keyExtractor={key => key.id.toString()}
                renderItem={({ item }) => (
                    <Users
                        uri={item.uri && item.uri}
                        title={item.name}
                        email={item.email}
                        subTitle={item.occupation}
                    />

                )}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "dodgerblue",
        width: "100%",
        height: "100%",
    },
})
export default UsersScreen;