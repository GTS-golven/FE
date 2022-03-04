import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

import Colors from '../components/Colors';

const Dashboard = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <Text>Email</Text>
                <TextInput style={styles.textinpput} />
                <Text>Wachtwoord</Text>
                <TextInput style={styles.textinpput} />
                <View>
                    <Pressable style={[styles.button, styles.button1]}>
                        <Text style={styles.text}>Log in</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.button2]}>
                        <Text style={styles.text}>Wachtwoord vergeten</Text>
                    </Pressable>
                </View>
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
        width: '45%',
        height: 200,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    text: {
        fontSize: 16,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 20,
    },

    button1: {
        marginBottom: 10,
        backgroundColor: Colors.button1,
    },
    button2: {
        backgroundColor: Colors.button2,
    },

    textinpput: {
        height: 20,
        width: 50,
        borderColor: Colors.text,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: '100%'
    },
});

export default Dashboard;