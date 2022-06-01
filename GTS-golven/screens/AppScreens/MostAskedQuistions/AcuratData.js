import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../../../components/NavBar";

const MaakVideo = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Wat betekent de data?</Text>
          <Text style={styles.text}>
            Dit is de text waar we uitleggen hoe accuraat onze data is zodat
            mensen weten of hun data uit onze app een beetje vertrouwbaar is of
            dat onze app niet betrouwbaar genoeg is voor de user. Hier weten ze
            ook als hun slagen niet allemaal exact het zelfde zijn dat het kan
            komen door de niet accurate data. Zo weten ze in welke marge het aan
            de app ligt en in welke marge aan hun ligt.
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
