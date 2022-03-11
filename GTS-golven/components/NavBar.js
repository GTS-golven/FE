import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Colors from './Colors';

const NavBar = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.navContainer}>
                <View style={styles.buttonContainer}>
                    <Image style={styles.image} source={require('../assets/adaptive-icon.png')}/>
                    <Text style={styles.text}>Settings</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Image style={styles.image} source={require('../assets/adaptive-icon.png')} />
                    <Text style={styles.text}>Home</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Image style={styles.image} source={require('../assets/adaptive-icon.png')} />
                    <Text style={styles.text}>Profiel</Text>
                </View>
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