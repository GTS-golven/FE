import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Colors from "./Colors";

const Popup = props => {
    return (
        <View style={styles.screen}>
            <View style={[styles.buttonContainer, styles.openCamera]}>
                <Pressable onPress={props.pressedCamera}>
                    <Text style={styles.text}>Open camera</Text>
                </Pressable>
            </View>
            <View style={[styles.buttonContainer, styles.openGallery]}>
                <Pressable onPress={props.pressedCameraRoll}>
                    <Text style={styles.text}>Open gallery</Text>
                </Pressable>
            </View>
            <View style={[styles.buttonContainer, styles.close]}>
                <Pressable onPress={props.close}>
                    <Text style={styles.textX}>❌</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "flex-end"
    },

    buttonContainer: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: 70,
        alignItems: "center",
        justifyContent: "center",
    },

    openCamera: {
        borderColor: Colors.black,
        borderWidth: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    openGallery: {
        borderColor: Colors.black,
        borderWidth: 1,
    },

    close: {
        height: 90,
        borderColor: Colors.black,
        borderWidth: 1,
    },

    text: {
        fontSize: 17,
        fontWeight: "bold"
    },

    textX: {
        fontSize: 30,
    }
});

export default Popup;