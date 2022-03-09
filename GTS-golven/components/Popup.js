import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Colors from "./Colors";

const Popup = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.openCamera}>
                <Pressable>
                    <Text>Open camera</Text>
                </Pressable>
            </View>
            <View style={styles.openGallery}>
                <Pressable>
                    <Text>Open gallery</Text>
                </Pressable>
            </View>
            <View style={styles.close}>
                <Pressable>
                    <Text>Close</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    
    },

    openCamera: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.black,
        borderWidth: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    openGallery: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.black,
        borderWidth: 1,
    },

    close: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.black,
        borderWidth: 1,
    },
});

export default Popup;