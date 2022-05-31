import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import NavBar from "../components/NavBar";

const MaakVideo = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Wat betekent de data?</Text>
          <Text style={styles.text}>
            Dit is de text waar we uitleggen wat de data betekent en hoe je de
            data kan interpeteren. Dit kunnen we ook uitleggen met een
            afbeelding van voorbeeld data van de gallery zodat het voor mensen
            duidelijk is wat welke data beteket.
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
    marginTop: 20,
  },

  container: {
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  topContainer: {
    height: "30%",
    width: "80%",
    // gap: "10%",
  },

  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },

  text: {
    fontSize: 15,
  },

  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default MaakVideo;
