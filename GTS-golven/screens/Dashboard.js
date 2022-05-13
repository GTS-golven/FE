import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";


import Colors from "../components/Colors";
import Card from "../components/Card";
import Popup from "../components/Popup";
import NavBar from "../components/NavBar";

import { Snackbar } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker";

const Dashboard = ({ navigation }) => {
  const [pickedImagePath, setPickedImagePath] = useState(
    "../assets.VideoExample.png"
  );
  const [popup, setpopup] = useState(0);
  const [title, settitle] = useState("Slag 1 -i5");
  const [date, setdate] = useState("09-08-2022");
  const [state, setState] = useState(false);

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
      navigation.push("Load");
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
      navigation.push("Load");
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
    <View style={styles.screen}>
      <View style={styles.centerScroll}>
        <View>
          <ScrollView
            horizontal={true}
            alwaysBounceHorizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.ScrollView}
          >
            <View style={styles.card}>
              <View>
                <Pressable style={styles.container} onPress={() => showPopUp()}>
                  <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                      <Image style={styles.img} source={require('../assets/plus.png')} />
                    </View>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>Video uploaden</Text>
                  </View>
                </Pressable>
              </View>
              <View>
                <Card
                  title={title}
                  date={date}
                  source={{ uri: pickedImagePath }}
                />
              </View>
              <View>
                <Pressable style={styles.container}>
                  <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                      <Image style={styles.img} source={require('../assets/image-gallery.png')} />
                    </View>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>Gallerij</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      {content}
      <Snackbar
        visible={state}
        onDismiss={() => setState(false)}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}
      >
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  centerScroll: {
    justifyContent: "center",
  },

  ScrollView: {
    width: "100%",
    height: "70%",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "30%",
    paddingRight: "30%",
  },

  container: {
    height: "30%",
    width: "100%",
  },

  buttonContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    backgroundColor: Colors.primary,
  },

  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    marginTop: 10,
    fontSize: 20,
  },

  img: {
    width: "50%",
    height: "50%",
  },
});

export default Dashboard;
