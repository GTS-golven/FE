import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";

import NavBar from "../components/NavBar";

import Colors from "../components/Colors";

import UserService from "../services/UserService";
import { Snackbar } from "react-native-paper";
var userService = new UserService();

const Profiel = ({ navigation }) => {
  const [pickedImagePath, setPickedImagePath] = useState(
    "../assets/profile.jpg"
  );
  const [name, setName] = useState("yuri klasnikof");
  const [mail, setMail] = useState("yuriklasnikof@gmail.com");
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const childFunc = React.useRef(null);

  async function Register() {
    var dict = {
      username: mail,
      first_name: name,
      profile_pic: pickedImagePath,
    };

    console.log(dict);

    var test = await userService.put(dict);
    console.log(test);
  }

  const save = () => {
    if (name === "" || mail === "" || pickedImagePath === "") {
      setState(true);
    } else {
      Register();
      console.log("naam:", name, "mail:", mail, "pic:", pickedImagePath);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: pickedImagePath }} />
          <Pressable onPress={() => childFunc.current()}>
            <Image style={styles.edit} source={require("../assets/edit.png")} />
          </Pressable>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <TextInput
              style={styles.Input}
              onChangeText={setName}
              value={name}
            />
          </View>
          <View>
            <TextInput
              style={styles.Input}
              onChangeText={setMail}
              value={mail}
            />
          </View>
        </View>
        <Pressable style={styles.button} onPress={save}>
          <Text style={styles.buttonText}>Bewaar</Text>
        </Pressable>
      </View>
      <NavBar />
      <Snackbar
        wrapperStyle={{ top: 40 }}
        visible={state}
        onDismiss={() => setState(false)}
      >
        Vul alle verplichte velden in
      </Snackbar>
      <Snackbar
        wrapperStyle={{ top: 40 }}
        visible={state2}
        onDismiss={() => setState2(false)}
      >
        We hebben toegang tot de camera nodig
      </Snackbar>
      <Snackbar
        wrapperStyle={{ top: 40 }}
        visible={state3}
        onDismiss={() => setState3(false)}
      >
        We hebben toegang tot de cameraroll nodig
      </Snackbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "70%",
  },

  image: {
    borderRadius: 300,
    width: 300,
    height: 300,
  },

  infoContainer: {
    height: 150,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  Input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 5,
    width: 200,
    textAlign: "center",
  },

  edit: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 15,
    right: 15,
    resizeMode: "contain",
    transform: [{ scaleX: -1 }],
  },

  button: {
    width: "40%",
    height: "5,5%",
    backgroundColor: Colors.button1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 20,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Profiel;
