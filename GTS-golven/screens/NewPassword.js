import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import Colors from "../components/Colors";
import NavBar from "../components/NavBar";

const NewPassword = ({ navigation }) => {
    return(
        <View style={styles.screen}>
            <View style={styles.mainContainer}></View>
                <View style={styles.container}>
                    <Text style={styles.title}>Oud Wachtwoord</Text>
                    <TextInput style={styles.input} placeholder="Oud wachtwoord"/>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Nieuw Wachtwoord</Text>
                    <TextInput style={styles.input} placeholder="Nieuw wachtwoord"/>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Herhaal nieuw Wachtwoord</Text>
                    <TextInput style={styles.input} placeholder="Herhaal nieuw wachtwoord"/>
                </View>
                <Pressable style={styles.button}><Text style={styles.buttonText}>Verrander</Text></Pressable>
            <NavBar />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },

    mainContainer: {
        height: '30%',
        width: '100%',
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    container: {
        height: '11%',
        width: '80%',
        alignItems: "center",
        justifyContent: "space-evenly",
        textAlign: "center",
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
    },

    input: {
        width: '80%',
        height: '30%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
    },

    button: {
        height: '5%',
        width: '50%',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        backgroundColor: Colors.button1,
        textAlign: "center",
    },

    buttonText: {
        fontWeight: "bold",
        fontSize: 15,
    }
});

export default NewPassword;