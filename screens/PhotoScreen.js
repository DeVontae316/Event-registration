import React, { useEffect, useState, useContext } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { UserContext } from "../Context/userContext";

const PhotoScreen = () => {
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);
    const { idInput, picInput } = useContext(UserContext);
    console.log("id below of user signed in:")
    console.log(idInput[0]);
    const handlePress = async () => {
        picInput[1](false);
        const pic = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        if (!pic.cancelled) {
            picInput[1](false);
            setLoading(true);
            const req = await fetch(`http://localhost:8000/users/${idInput[0]}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",

                },
                body: JSON.stringify({
                    uri: pic.uri
                })
            })
            const res = await req.json();
            console.log("profile payload below:");
            console.log(res);
            if (res) {
                setPic(pic.uri);
                picInput[1](pic.uri);
                setLoading(false);

            }
        }
    }
    useEffect(() => {
        (async () => {
            const permission = await ImagePicker.requestCameraPermissionsAsync();
            if (!permission.granted) {
                alert("We need permission to access your camera.");
            }
        })()
    }, [])
    return (
        <SafeAreaView
            style={{
                backgroundColor: "dodgerblue",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",

            }}
        >
            <View style={{
                justifyContent: "center",
                alignItems: "center",


            }}>
                <View style={{ marginBottom: 45 }}>
                    <Text style={{ fontSize: 24, color: "white" }}>Please add your profile picture</Text>
                </View>
                <View style={{
                    width: 150,
                    height: 150,
                    backgroundColor: "#DCDCDC",
                    borderRadius: 75,
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden"

                }}>
                    <TouchableOpacity onPress={handlePress}>
                        <Image source={{
                            uri: pic,
                            width: 150,
                            height: 150,
                            borderRadius: 75,

                        }} />

                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 135 }}>
                    <TouchableOpacity>
                        <Text style={{ color: "white", fontSize: 20 }}>{picInput[0] && "Picture uploaded successfully"}</Text>

                        <Text style={{ color: "white", fontSize: 20 }}>{loading && "Loading..."}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default PhotoScreen;