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

import Popup from "../components/Popup";
import NavBar from "../components/NavBar";

import * as ImagePicker from "expo-image-picker";
import Colors from "../components/Colors";

import UserService from "../services/UserService";
var userService = new UserService();

const Profiel = ({ navigation }) => {
  const [pickedImagePath, setPickedImagePath] = useState(
    "../assets/profile.jpg"
  );
  const [popup, setpopup] = useState(0);
  const [name, setName] = useState("yuri klasnikof");
  const [mail, setMail] = useState("yuriklasnikof@gmail.com");

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
      console.log("Niet alle velden zijn ingevuld");
    } else {
      Register();
      console.log("naam:", name, "mail:", mail, "pic:", pickedImagePath);
    }
  };

  const showPopUp = () => {
    setpopup(1);
  };

  const closePopUp = () => {
    setpopup(0);
  };

  const showImagePicker = async () => {
    setpopup(0);
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Je hebt toegang tot de cameraroll geweirgerd");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
    }
  };

  const openCamera = async () => {
    setpopup(0);
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Je hebt toegang tot de camera geweigerd!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
    }
  };

  let content = <NavBar />;
  if (popup === 1) {
    content = (
      <Popup
        close={closePopUp}
        pressedCameraRoll={showImagePicker}
        pressedCamera={openCamera}
      />
    );
  } else {
    content = <NavBar />;
  }
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: pickedImagePath }} />
          <Pressable onPress={showPopUp}>
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
      {content}
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
