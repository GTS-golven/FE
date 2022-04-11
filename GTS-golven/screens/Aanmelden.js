import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import Colors from "../components/Colors";
// import UserService from "../services/UserService";
// var userService = new UserService();
// var email = "Test mail";
// var pass = "Test wachtwoord";
// var test123;
// test123.email = email;
// test123.password = pass;
// var test = userService.post(test123);

const Dashboard = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const passCheck = () => {
    if (checkPassword === password) {
      navigation.push("ConfirmMail");
    }
    if (checkPassword !== password) {
      console.log("Wachwoorden zijn niet gelijk");
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Email:</Text>
            <TextInput
              textContentType="emailAddress"
              style={styles.textinpput}
              autoComplete="email"
              keyboardAppearance="email-address"
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Wachtwoord:</Text>
            <TextInput
              textContentType="password"
              secureTextEntry
              style={styles.textinpput}
              autoComplete="password"
              keyboardAppearance="visible-password"
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Herhaal wachtwoord:</Text>
            <TextInput
              textContentType="password"
              secureTextEntry
              style={styles.textinpput}
              autoComplete="password"
              keyboardAppearance="visible-password"
              onChangeText={setCheckPassword}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.button1]}
            onPress={passCheck}
          >
            <Text style={styles.textButton}>Meld aan</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
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
