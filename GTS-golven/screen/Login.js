import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

import Colors from '../components/Colors';
import AuthService from '../services/AuthService'
import FetchService from '../services/FetchService';

const Dashboard = props => {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");


    var token = null
    var refreshToken = null



    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <View style={styles.infoContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Email:</Text>
                        <TextInput onChangeText={onChangeEmail} value={email} textContentType='emailAddress' style={styles.textinpput} autoComplete='email' keyboardAppearance='email-address' />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Wachtwoord:</Text>
                        <TextInput onChangeText={onChangePassword} value={password} textContentType='password' secureTextEntry style={styles.textinpput} autoComplete='password' keyboardAppearance='visible-password' />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={[styles.button, styles.button1]} onPress={() => { postLogin(email, password) }}>
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

async function postLogin(email, password) {

    console.log(email, password)
    if (email === "" || password === "") {
        return
    }
    else {
        await AuthService.Login(email, password)
    }
}


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

    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 20,
        width: '50%'
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