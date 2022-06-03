import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import NavBar from "../../components/NavBar";
import { Snackbar } from "react-native-paper";

const Settings = ({ navigation }) => {
  const [state, setState] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Pressable
            style={styles.row}
            onPress={() => navigation.push("Vragen")}
          >
            <Image
              style={styles.image}
              source={require("../../assets/question.png")}
            />
            <Text style={styles.text}>Veel gestelde vragen</Text>
          </Pressable>
          <Pressable
            style={styles.row}
            onPress={() => navigation.push("NewPassword")}
          >
            <Image
              style={styles.image}
              source={require("../../assets/key.png")}
            />
            <Text style={styles.text}>Verrander wachtwoord</Text>
          </Pressable>
          <Pressable
            style={styles.row}
            onPress={() => navigation.push("Contact")}
          >
            <Image
              style={styles.image}
              source={require("../../assets/contact.png")}
            />
            <Text style={styles.text}>Contact ons</Text>
          </Pressable>
        </View>
        <View style={styles.bottomConainer}>
          <Pressable style={styles.row} onPress={() => setState(true)}>
            <Image
              style={styles.image}
              source={require("../../assets/loguit.png")}
            />
            <Text style={styles.text}>Log uit</Text>
          </Pressable>
          <Pressable style={styles.row} onPress={() => setState(true)}>
            <Image
              style={styles.image}
              source={require("../../assets/delete.png")}
            />
            <Text style={styles.text}>Verwijder account</Text>
          </Pressable>
        </View>
      </View>
      <NavBar />
      <Snackbar
        wrapperStyle={{ top: 40, zIndex: 10 }}
        visible={state}
        onDismiss={() => setState(false)}
      >
        Deze fucntie werkt helaas nog niet in onze app.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 60,
  },

  container: {
    height: "65%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  topContainer: {
    height: "100%",
    width: "80%",
  },

  bottomConainer: {
    height: "100%",
    width: "80%",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 30,
  },

  image: {
    height: 40,
    width: 40,
    resizeMode: "contain",
    marginRight: 20,
  },

  text: {
    fontSize: 17,
  },
});

export default Settings;
