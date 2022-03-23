import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import NavBar from "../components/NavBar";

const WatIsData= ({ navigation }) => {
    return(
        <View style={styles.screen}>
            <Text>Wat is dez</Text>
            <NavBar />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default WatIsData;