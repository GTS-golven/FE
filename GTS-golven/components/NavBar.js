import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Colors from "./Colors";
import { useNavigation, useRoute } from "@react-navigation/native";

const NavBar = () => {
  const nav = useNavigation();
  const [selected, setSelected] = useState()
  const route = useRoute()

  useEffect(() => {
    setSelected(route.name)
  }, [])

  const navElements = [
    {
      name: "Settings",
      src: "../assets/setting.png",
    },
    {
      name: "Dashboard",
      src: "../assets/huisje.png",

    },
    {
      name: "Profiel",
      src: "../assets/profile.jpg"
    }
  ]

  return (
    <View style={styles.screen}>
      <View style={styles.navContainer}>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => nav.navigate('Settings')}
        >
          <View style={selected === "Settings" ? styles.selected : styles.nothing}>
            <Image
              style={styles.image}
              source={require("../assets/setting.png")}
            />
          </View>
          <Text style={styles.text}>Settings</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => nav.navigate('Dashboard')}
        >
          <View style={selected === "Dashboard" ? styles.selected : styles.nothing}>
            <Image
              style={styles.image}
              source={require("../assets/huisje.png")}
            />
          </View>
          <Text style={styles.text}>Home</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => nav.navigate('Profiel')}
        >
          <View style={selected === "Profiel" ? styles.selected : styles.nothing}>
            <Image
              style={selected === "Profiel" ? styles.selected : styles.image}
              source={require("../assets/profile.jpg")}
            />
          </View>
          <Text style={styles.text}>Profiel</Text>
        </Pressable>
        {/* {navElements.map((element) => {
          return (
            <Pressable
              key={element.name}
              style={styles.buttonContainer}
              onPress={() => nav.navigate(element.name)}
            >
              <Image
                style={selected === element.name ? styles.selected : styles.image}
                source={require(element.src)}
              />
              <Text style={styles.text}>{element.name}</Text>
            </Pressable>
          )
        })} */}
      </View >
    </View >
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
    top: -50,
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: Colors.backgournd,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },

  profile: {
    borderRadius: 50,
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default NavBar;