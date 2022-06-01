import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

import Colors from "../../components/Colors";
import AuthService from "../../services/AuthService";
import FetchService from "../../services/FetchService";
import { Snackbar } from "react-native-paper";

const Dashboard = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);

  var token = null;
  var refreshToken = null;

  async function postLogin(email, password) {
    const res = await AuthService.Login(email, password)
      .then((res) => {
        if (res === 200) {
          navigation.push("Dashboard");
        } else {
          setState(true);
        }
      })
      .catch((error) => setState2(true));
  }
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Email:</Text>
            <TextInput
              onChangeText={onChangeEmail}
              value={email}
              textContentType="emailAddress"
              style={styles.textinpput}
              autoComplete="email"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Wachtwoord:</Text>
            <TextInput
              onChangeText={onChangePassword}
              value={password}
              textContentType="password"
              secureTextEntry
              style={styles.textinpput}
              autoComplete="password"
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.button1]}
            // onPress={() => {
            //   postLogin(email, password);
            // }}
            onPress={() => navigation.push("Dashboard")}
          >
            <Text style={styles.textButton}>Log in</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.button2]}
            onPress={() => navigation.push("WachtwoordVergeten")}
          >
            <Text style={styles.textButton}>Wachtwoord vergeten?</Text>
          </Pressable>
        </View>
      </View>
      <Snackbar
        wrapperStyle={{ top: 40 }}
        visible={state}
        onDismiss={() => setState(false)}
      >
        Wachtwoord en email komen niet over een.
      </Snackbar>
      <Snackbar
        wrapperStyle={{ top: 40 }}
        visible={state2}
        onDismiss={() => setState2(false)}
      >
        Er is iets fout gegaan probeer later opnieuw
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

  card: {
    width: "100%",
    height: 300,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  inputContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },

  textinpput: {
    height: 30,
    width: "60%",
    borderColor: Colors.text,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },

  infoContainer: {
    width: "100%",
  },

  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 20,
    width: "50%",
  },

  button1: {
    marginBottom: 10,
    backgroundColor: Colors.button1,
  },
  button2: {
    backgroundColor: Colors.button2,
  },

  textButton: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Dashboard;
