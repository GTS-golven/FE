import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Dashboard = props => {
    return (
        <View style={styles.screen}>
            <Text>Dit is het dashboard</Text>    
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Dashboard;