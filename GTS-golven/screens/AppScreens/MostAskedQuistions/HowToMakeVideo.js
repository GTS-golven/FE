import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import NavBar from "../../../components/NavBar";

const MaakVideo = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Hoe maak ik de video?</Text>
          <Text style={styles.text}>
            Dit is de text waar we uitleggen hoe de video er uit zou moeten zien
            bij de user. De user zou er uit moeten kunnen halen waar hij zijn
            camera moet neer zetten en waar hij de bal ten opzichte van de
            camera moet neerleggen.
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.title}>
            De video komt er ongeveer zo uit te zien
          </Text>
          <Image
            source={require("../../../assets/VideoExample.png")}
            style={styles.img}
          />
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

  bottomContainer: {
    height: "30%",
    width: "80%",
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
