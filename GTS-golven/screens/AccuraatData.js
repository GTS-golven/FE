import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import NavBar from "../components/NavBar";

const AccuraatData = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>Het is 80% van de tijd helemaal goed</Text>
            <NavBar />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default AccuraatData;