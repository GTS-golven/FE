import React from "react";
import { View, Image, StyleSheet, TextInput } from 'react-native'
import NavBar from "../components/NavBar";

const Profiel = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/profile.jpg')} />
                    <Image style={styles.edit} source={require('../assets/edit.svg')} />
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