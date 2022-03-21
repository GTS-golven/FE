import React, { useState } from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import Colors from './Colors';
import { useNavigation } from "@react-navigation/native";

const NavBar = props => {
    const navigation = useNavigation();
    return (
        <View style={styles.screen}>
            <View style={styles.navContainer}>
                <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Settings')}>
                    <Image style={styles.image} source={require('../assets/setting.png')} />
                    <Text style={styles.text}>Settings</Text>
                </Pressable>
                <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Dashboard')}>
                    <Image style={styles.image} source={require('../assets/huisje.png')} />
                    <Text style={styles.text}>Home</Text>
                </Pressable>
                <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Profiel')}>
                    <Image style={[styles.image, styles.profile]} source={require('../assets/profile.jpg')} />
                    <Text style={styles.text}>Profiel</Text>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        position: 'fixed',
        bottom: 0,
        backgroundColor: Colors.backgournd
    },

    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
        width: 414,
        backgroundColor: Colors.primary,
    },

    buttonContainer: {
        alignItems: 'center'
    },

    selected: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 20,
        width: 50,
        height: 10,
        marginTop: 8,
    },

    image: {
        width: 50,
        height: 50,
    },

    profile: {
        borderRadius: 50,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default NavBar;