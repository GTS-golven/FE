import React from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import Colors from '../components/Colors';

const Dashboard = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.mainPic}>
                <Image style={styles.image} source={require('../assets/startgolfer.jpg')}/>
            </View>  
            <View style={styles.buttonContainer}>
                <Pressable style={styles.aanmelden} onPress={props.onAanmelden}><Text style={styles.text}>Aanmelden</Text></Pressable>
                <Pressable style={styles.inlog} onPress={props.onInlog}><Text style={styles.text}>Inloggen</Text></Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    mainPic: {

    },

    image: {
        width: '100%',
        height: 800,
    },

    buttonContainer: {
        flexDirection: 'row',
        height: 100,
    },

    aanmelden: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.button2,
        width: '50%',
        height: '100%',
        borderRightWidth: 0.5,
    },

    inlog: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.button1,
        width: '50%',
        height: '100%',
        borderLeftWidth: 0.5,
    },  

    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default Dashboard;