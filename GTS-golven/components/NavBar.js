import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Colors from "./Colors";
import { useNavigation } from "@react-navigation/native";

const NavBar = (props) => {
  const navigation = useNavigation();
  const [left, setLeft] = useState(163);

  const home = () => {
    setLeft(163)
    navigation.navigate("Dashboard")
  };

  const settings = () => {
    setLeft(35)
    navigation.navigate("Settings")
  };

  const profiel = () => {
    setLeft(287)
    navigation.navigate("Profiel")
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.selected, { left: left }]}></View>
      <View style={styles.navContainer}>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => settings()}
        >
          <Image
            style={styles.image}
            source={require("../assets/setting.png")}
          />
          <Text style={styles.text}>Settings</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => home()}
        >
          <Image
            style={styles.image}
            source={require("../assets/huisje.png")}
          />
          <Text style={styles.text}>Home</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => profiel()}
        >
          <Image
            style={[styles.image, styles.profile]}
            source={require("../assets/profile.jpg")}
          />
          <Text style={styles.text}>Profiel</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.backgournd,
  },

  navContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    minHeight: 100,
    width: "100%",
    backgroundColor: Colors.primary,
  },

  buttonContainer: {
    height: "60%",
    width: "20%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  selected: {
    position: "absolute",
    top: -35,
    width: 90,
    height: 90,
    borderRadius: 100,
    borderWidth: 10,
    backgroundColor: Colors.primary,
    borderColor: Colors.backgournd,
    zIndex: 1,
  },

  image: {
    width: 30,
    height: 30,
  },

  profile: {
    borderRadius: 50,
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
  },

  index: {
    zIndex: 10,
  }
});

export default NavBar;
