import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Color from "../components/Colors";

import { ProgressBar, Colors } from 'react-native-paper';

const Load = ({ navigation }) => {
  const [load, setLoad] = useState(0)

  useEffect(() => {
    setLoad(1)
    if (load === 1) {
      setTimeout(() => {
        navigation.push('AdInfo')
      }, 1000)
    }
  })

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={require("../assets/VideoExample.png")}
        />
        <ProgressBar progress={load} color={Colors.green800} style={{ width: 340, height: 215, zIndex: 0 }} />
      </View>
      <View style={styles.hintContainer}>
        <Text style={styles.title}>Hint:</Text>
        <Text style={styles.text}>Wijs de bal altijd na</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  mainContainer: {
    height: "60%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  hintContainer: {
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  image: {
    position: "absolute",
    width: 320,
    height: 200,
    zIndex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  text: {
    fontSize: 15,
  },
});

export default Load;
