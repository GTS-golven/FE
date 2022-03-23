import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import NavBar from "../components/NavBar";

const Settings = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Pressable style={styles.row} onPress={() => navigation.push('Vragen')}>
                    <Image style={styles.image} source={require('../assets/huisje.png')} />
                    <Text style={styles.text}>Veel gestelde vragen</Text>
                </Pressable>
                <Pressable style={styles.row} onPress={() => navigation.push('WachtwoordVergeten')}>
                    <Image style={styles.image} source={require('../assets/huisje.png')} />
                    <Text style={styles.text}>Verrander wachtwoord</Text>
                </Pressable>
                <Pressable style={styles.row} onPress={() => navigation.push('Contact')}>
                    <Image style={styles.image} source={require('../assets/huisje.png')} />
                    <Text style={styles.text}>Contact ons</Text>
                </Pressable>
            </View>
            <NavBar />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    
    container: {
        height: '30%',
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        width: '80%',
    },

    image: {
        height: 40,
        width: 40,
    },

    text: {
        fontSize: 17,
    }
});

export default Settings;