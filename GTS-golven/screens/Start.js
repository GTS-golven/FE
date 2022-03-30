import React from 'react'
import { View, Text, ImageBackground, Pressable, StyleSheet, SafeAreaView } from 'react-native'
import Colors from '../components/Colors';

const Dashboard = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screen}>
            <ImageBackground style={styles.image} source={require('../assets/startgolfer.jpg')}>
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.inlog} onPress={() => navigation.push('Login')}><Text style={styles.text}>Inloggen</Text></Pressable>
                        <Pressable style={styles.aanmelden} onPress={() => navigation.push('Aanmelden')}><Text style={styles.text}>Aanmelden</Text></Pressable>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    container: {
        height: '90%',
        justifyContent: 'flex-end',
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '30%'
    },

    image: {
        width: '100%',
        height: '100%',
    },

    aanmelden: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.button2,
        width: '60%',
        height: '30%',
        borderRadius: 20,
    },

    inlog: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.button1,
        width: '60%',
        height: '30%',
        borderRadius: 20,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default Dashboard;