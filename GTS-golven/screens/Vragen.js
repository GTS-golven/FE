import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import NavBar from "../components/NavBar";

const Vragen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Pressable style={styles.row} onPress={() => navigation.push('MaakVideo')}>
                    <Text style={styles.text}>Hoe maak je jouw een video</Text>
                    <Image style={styles.image} source={require('../assets/arrow-right.svg')} />
                </Pressable>
                <Pressable style={styles.row} onPress={() => navigation.push('WatIsData')}>
                    <Text style={styles.text}>Wat betekend alle data</Text>
                    <Image style={styles.image} source={require('../assets/arrow-right.svg')} />
                </Pressable>
                <Pressable style={styles.row} onPress={() => navigation.push('AccuraatData')}>
                    <Text style={styles.text}>Hoe accuraat is de data</Text>
                    <Image style={styles.image} source={require('../assets/arrow-right.svg')} />
                </Pressable>
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
        height: 20,
        width: 20,
    },

    text: {
        fontSize: 17,
    }
});

export default Vragen;