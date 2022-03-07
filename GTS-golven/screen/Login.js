import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import Colors from '../components/Colors';
import Buttons from '../components/Buttons';

const Dashboard = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <View style={styles.infoContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Email:</Text>
                        <TextInput style={styles.textinpput} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Wachtwoord:</Text>
                        <TextInput style={styles.textinpput} />
                    </View>
                </View>
                <Buttons button1={'Log in'} button2={'Wachtwoord vergeten?'}/>
            </View>  
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    card: {
        width: '100%',
        height: 300,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    inputContainer: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    textinpput: {
        height: 30,
        width: '60%',
        borderColor: Colors.text,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
    },

    infoContainer: {
        width: '100%',
    }
});

export default Dashboard;