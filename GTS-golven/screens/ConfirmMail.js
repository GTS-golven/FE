import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

import Colors from '../components/Colors';
import Buttons from '../components/Buttons';

const Dashboard = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <View style={styles.infoContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Vul mail verificatie code in</Text>
                        <TextInput textContentType='oneTimeCode' style={styles.textinpput} />
                    </View>
                </View>                    
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, styles.button]} onPress={props.toStart}>
                    <Text style={styles.textButton}>Cofirm</Text>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    card: {
        width: '100%',
        height: 90,
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
        width: '50%',
        backgroundColor: Colors.button1,
    },

    textButton: {
        fontSize: 15,
        fontWeight: 'bold'
    },
});

export default Dashboard;