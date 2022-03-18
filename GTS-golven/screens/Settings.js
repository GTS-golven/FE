import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import NavBar from "../components/NavBar";

const Settings = ({ navigation }) => {
    return (
        <View styles={styles.screen}>
            <Text>Settings</Text>
            <NavBar />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Settings;