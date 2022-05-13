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

import { Snackbar } from 'react-native-paper';
import UserService from "../services/UserService";
var userService = new UserService();

const Dashboard = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);

  const validate = (email) => {
    setEmail(email);
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if (expression.test(String(email).toLowerCase())) {
      setCheckEmail(true);
    }

    return expression.test(String(email).toLowerCase());
  };

  async function Register() {
    var dict = {
      username: email,
      email: email,
      password: password,
    };

    console.log(dict);

    var test = await userService.register(dict);
    console.log(test);
  }

  const passCheck = () => {
    if (checkPassword === password && checkEmail === true) {
      Register();
      navigation.push("Dashboard");
    }
    if (checkPassword !== password) {
      setState(true)
    }
    if (checkEmail !== true) {
      setState2(true)
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
              onChangeText={validate}
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
      <Snackbar
        wrapperStyle={{ top: 40 }}
        visible={state}
        onDismiss={() => setState(false)}

      >
        Wachtwoorden komen niet over een
      </Snackbar>
      <Snackbar
        wrapperStyle={{ top: 40 }}
        visible={state2}
        onDismiss={() => setState2(false)}

      >
        Voer een gelidg email adress in
      </Snackbar>
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
