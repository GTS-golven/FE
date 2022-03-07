import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

import Colors from '../components/Colors';

const Dashboard = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <View style={styles.infoContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Nieuw wachtwoord</Text>
                        <TextInput textContentType='newPassword' style={styles.textinpput} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Herhaal je wachtwoord</Text>
                        <TextInput textContentType='newPassword' secureTextEntry style={styles.textinpput} />
                    </View>
                </View>
                <Pressable style={[styles.button, styles.button]} onPress={props.toLogin}>
                    <Text style={styles.textButton}>Reset wachtwoord</Text>
                </Pressable>
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

    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    inputContainer: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
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
        backgroundColor: Colors.button1,
    },

    textButton: {
        fontSize: 15,
        fontWeight: 'bold'
    },
});

export default Dashboard;