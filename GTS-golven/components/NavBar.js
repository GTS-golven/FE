import React, { useState, useEffect } from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import Colors from './Colors';

import Dashboard from '../screen/Dashboard';

const NavBar = props => {
    const [Home, setHome] = useState(0)
    const [Settings, setSettings] = useState(0)
    const [Profiel, setProfiel] = useState(0)

    const selected = () => {
        if (selected === 1) {
            setHome(1)
            setSettings(0)
            setProfiel(0)
        } if (selected === 2) {
            setSettings(1)
            setHome(0)
            setProfiel(0)
        } if (selected == 3) {
            setProfiel(1)
            setHome(0)
            setSettings(0)
        } else {
            setHome(0)
            setSettings(0)
            setProfiel(0)
        }
    }

    let home = <Text style={styles.text}>Home</Text>

    if (Home === 1) {
        home = <View style={styles.selected} />
    }

    let settings = <Text style={styles.text}>Settings</Text>

    if (Settings === 1) {
        settings = <View style={styles.selected} />
    }

    let profiel = <Text style={styles.text}>Profiel</Text>

    if (Profiel === 1) {
        profiel = <View style={styles.selected} />
    }

    return (
        <View style={styles.screen}>
            <View style={styles.navContainer}>
                <Pressable style={styles.buttonContainer} onPress={props.toSettings}>
                    <Image style={styles.image} source={require('../assets/adaptive-icon.png')} />
                    {settings}
                </Pressable>
                <Pressable style={styles.buttonContainer} onPress={props.toHome}>
                    <Image style={styles.image} source={require('../assets/adaptive-icon.png')} />
                    {home}
                </Pressable>
                <Pressable style={styles.buttonContainer} onPress={props.toProfiel}>
                    <Image style={styles.image} source={require('../assets/adaptive-icon.png')} />
                    {profiel}
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        position: 'absolute',
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

    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default NavBar;