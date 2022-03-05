import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Colors from './Colors';

const Dashboard = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <Image style={styles.image} source={require('../assets/VideoExample.png')}/>
                <View style={styles.text}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.date}>{props.date}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    image: {
        width: 300,
        height: 200,
    },

    card: {
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 10,
        borderWidth: 1,
        marginLeft: 10,
    },

    text: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },  

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    date: {
        fontSize: 11,
    },
});

export default Dashboard;