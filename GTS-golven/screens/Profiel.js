import React from "react";
import { View, Image, StyleSheet, TextInput } from 'react-native'
import NavBar from "../components/NavBar";

const Profiel = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/profile.jpg')} />
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.name}>
                        <TextInput style={styles.nameInput} placeholder="Bert de Jong" />
                    </View>
                    <View style={styles.mail}>
                        <TextInput style={styles.mailInput} placeholder="bertdejong@gmail.com" />
                    </View>
                </View>
            </View>
            <NavBar />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    container: {
        justifyContent: "space-evenly",
        alignItems: "center",
        height: '70%'
    },

    image: {
        borderRadius: 300,
        width: 300,
        height: 300,
    },

    infoContainer: {
        height: 100,
        width: '100%',
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    name: {

    },

    nameInput: {

    },

    mail: {

    },

    mailInput: {

    },
});

export default Profiel;