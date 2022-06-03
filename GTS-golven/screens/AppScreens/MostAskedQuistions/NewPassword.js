import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Colors from "../../../components/Colors";
import NavBar from "../../../components/NavBar";
import { Snackbar } from "react-native-paper";

const NewPassword = ({ navigation }) => {
  const [state, setState] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.mainContainer}>
        <Text style={styles.headerTitle}>Verrander jouw wachtwoord</Text>
        <View style={styles.container}>
          <Text style={styles.title}>Oud Wachtwoord:</Text>
          <TextInput style={styles.input} placeholder="Oud wachtwoord" />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Nieuw Wachtwoord:</Text>
          <TextInput style={styles.input} placeholder="Nieuw wachtwoord" />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Herhaal nieuw Wachtwoord:</Text>
          <TextInput
            style={styles.input}
            placeholder="Herhaal nieuw wachtwoord"
          />
        </View>
        <Pressable style={styles.button} onPress={() => setState(true)}>
          <Text style={styles.buttonText}>Verrander</Text>
        </Pressable>
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
    justifyContent: "center",
    alignItems: "center",
  },

  mainContainer: {
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    height: "20%",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  input: {
    width: "80%",
    height: "30%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },

  button: {
    width: "50%",
    height: "8%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.button1,
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default NewPassword;
