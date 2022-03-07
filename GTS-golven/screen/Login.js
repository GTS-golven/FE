import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

import Colors from '../components/Colors';

const Dashboard = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <View style={styles.infoContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Email:</Text>
                        <TextInput textContentType='emailAddress' style={styles.textinpput} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Wachtwoord:</Text>
                        <TextInput textContentType='password' secureTextEntry style={styles.textinpput} />
                    </View>
                </View>
                <View>
                    <Pressable style={[styles.button, styles.button1]} onPress={props.toDashboard}>
                        <Text style={styles.textButton}>Log in</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.button2]} onPress={props.toWachtwoordVergeten}>
                        <Text style={styles.textButton}>Wachtwoord vergeten?</Text>
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
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 20,
    },

    button1: {
        marginBottom: 10,
        backgroundColor: Colors.button1,
    },
    button2: {
        backgroundColor: Colors.button2,
    },

    textButton: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default Dashboard;