import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import NavBar from "../components/NavBar";

const MaakVideo = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.begin}>
                    <Text style={styles.title}>Hoe begin ik</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipiscing, elit congue aliquet vestibulum habitant mauris nullam, ridiculus felis scelerisque senectus quam. In volutpat hac pellentesque rutrum libero luctus lacus aliquet ac aenean sociosqu, tellus bibendum vestibulum curae netus orci pulvinar dictum lectus praesent. Vulputate montes odio purus velit leo habitant nulla suspendisse, lectus ante lacus cum nisi fringilla ut, sociis tempus malesuada fames imperdiet duis semper.</Text>
                </View>
                <View style={styles.voorbeeld}>
                    <Text style={styles.title}>Dit is een voorbeeld video</Text>
                    <Image style={styles.image} source={require('../assets/VideoExample.png')} />
                </View>
            </View>
            <NavBar />
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
        height: '80%',
        width: '100%',
    },

    begin: {
        justifyContent: "space-evenly",
        alignItems: "center",
        height: '40%',
        width: '80%',
    },

    voorbeeld: {
        justifyContent: "space-evenly",
        alignItems: "center",
        height: '40%',
        width: '80%',
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },

    text: {
        fontSize: 15,
        textAlign: "center"
    },

    image: {
        height: 200,
        width: 300,
        margin: 20,
    }
});

export default MaakVideo;