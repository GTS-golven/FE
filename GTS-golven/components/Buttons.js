import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "./Colors";

const Buttons = (props) => {
  return (
    <View>
      <Pressable style={[styles.button, styles.button1]}>
        <Text style={styles.text}>{props.button1}</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.button2]}>
        <Text style={styles.text}>{props.button2}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
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

  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Buttons;
