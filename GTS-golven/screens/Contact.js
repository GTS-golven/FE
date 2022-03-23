import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import Colors from "../components/Colors";
import NavBar from "../components/NavBar";

const Contact = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Neem contact op met ons</Text>
                </View>
                <View style={styles.Inputcontainer}>
                    <TextInput style={styles.input} placeholder="Naam" />
                    <TextInput style={styles.input} placeholder="Mail" />
                    <TextInput style={styles.input} placeholder="Onderwerp" />
                    <TextInput style={styles.bericht} placeholder="Bericht" />
                    <Pressable style={styles.verstuur}><Text style={styles.text}>Verstuur</Text></Pressable>
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
        height: '80%',
        width: '100%',
        justifyContent: "space-evenly",
    },
    
    titleContainer: {
        justifyContent: "center",
        alignItems: "center",
    },

    Inputcontainer: {
        justifyContent: "space-evenly",
        alignItems: "center",
        height: '50%'
    },

    input: {
        width: '80%',
        height: '10%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
    },

    bericht: {
        height: '30%',
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
    },

    verstuur: {
        width: '50%',
        height: '10%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.button1,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        width: '70%',
    },

    text: {
        fontWeight: "bold",
        fontSize: 15,
    }
});

export default Contact;