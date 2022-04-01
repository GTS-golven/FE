import React, { useState } from "react";
import { View, Image, StyleSheet, TextInput, SafeAreaView, Pressable } from 'react-native'

import Popup from "../components/Popup";
import NavBar from "../components/NavBar";

import * as ImagePicker from 'expo-image-picker';

const Profiel = ({ navigation }) => {
    const [pickedImagePath, setPickedImagePath] = useState('../assets/profile.jpg');
    const [popup, setpopup] = useState(0)

    const showPopUp = () => {
        setpopup(1)
    }

    const closePopUp = () => {
        setpopup(0)
    }

    const showImagePicker = async () => {
        setpopup(0)
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Je hebt toegang tot de cameraroll geweirgerd");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        // console.log(result);

        if (!result.cancelled) {
            navigation.push('Load')
            setPickedImagePath(result.uri);
        }
    }

    const openCamera = async () => {
        setpopup(0)
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Je hebt toegang tot de camera geweigerd!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        // console.log(result);

        if (!result.cancelled) {
            setPickedImagePath(result.uri);
        }
    }

    let content = <NavBar />
    if (popup === 1) {
        content = <Popup close={closePopUp} pressedCameraRoll={showImagePicker} pressedCamera={openCamera} />
    } else {
        content = <NavBar />
    }
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: pickedImagePath }} />
                    <Pressable onPress={showPopUp}><Image style={styles.edit} source={require('../assets/edit.png')} /></Pressable>
                </View>
                <View style={styles.infoContainer}>
                    <View>
                        <TextInput style={styles.Input} value="Bert de Jong" />
                    </View>
                    <View>
                        <TextInput style={styles.Input} value="bertdejong@gmail.com" />
                    </View>
                </View>
            </View>
            {content}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    container: {
        justifyContent: "space-evenly",
        alignItems: "center",
        height: '70%',
    },

    image: {
        borderRadius: 300,
        width: 300,
        height: 300,
    },

    infoContainer: {
        height: 150,
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    Input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5,
        width: 200,
        textAlign: "center"
    },

    edit: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 15,
        right: 15,
        resizeMode: "contain",
        transform: [{ scaleX: -1 }]
    }
});

export default Profiel;