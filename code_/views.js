import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';



export default function Views() {
    const [backgroundColor, setbackgroundColor] = useState(false);
    const [marginTop, setMarginTop] = useState(false);
    const [alignment, setAlignment] = useState(false);


    const handleColor = () => {
        setbackgroundColor(!backgroundColor);
    }
    const handleMarginTop = () => {
        setMarginTop(!marginTop);
    }
    const handleAlignment = () => {
        setAlignment(!alignment);
    }

    return (
        <>
            <SafeAreaView>

                <View style={marginTop ?
                    { marginTop: 100, justifyContent: "center", alignItems: "center" } :
                    { marginTop: 50, justifyContent: "center", alignItems: "center" }
                }>
                    <Text style={{ fontSize: 44 }}>
                        Hello World
        </Text>
                    <Button title="click me" onPress={handleMarginTop} />
                </View>



                <View style={backgroundColor ?
                    { marginTop: 100, backgroundColor: "red", justifyContent: "center", alignItems: "center" } :
                    { marginTop: 100, justifyContent: "center", alignItems: "center" }
                }>
                    <Text style={{ fontSize: 44 }}>
                        Hello World
        </Text>
                    <Button title="click me" onPress={handleColor} />
                </View>



                <View style={alignment ?
                    { marginTop: 100, justifyContent: "center", alignItems: "center" } :
                    { marginRight: 100, marginTop: 100 }
                }>
                    <Text style={{ fontSize: 44 }}>
                        Hello World
        </Text>
                    <Button title="click me" onPress={handleAlignment} />
                </View>

            </SafeAreaView>
        </>
    );
}


