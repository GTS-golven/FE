import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../components/NavBar";

const AccuraatData = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.title}>Hoe accuraat is de data:</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, pellentesque
            magna nisl auctor maecenas eros malesuada dictum, vivamus ligula
            arcu convallis leo etiam. Neque felis platea praesent lectus quisque
            parturient auctor, malesuada mattis sem volutpat curabitur maecenas,
            massa phasellus arcu quis porttitor nisi. Laoreet nec ultricies
            nascetur donec bibendum nostra inceptos pretium, facilisis aenean
            posuere phasellus fames velit commodo imperdiet felis, penatibus
            placerat eget tristique lobortis sodales aliquam.
          </Text>
        </View>
      </View>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    height: "80%",
    width: "80%",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  text: {
    fontSize: 15,
    textAlign: "center",
  },
});

export default AccuraatData;
