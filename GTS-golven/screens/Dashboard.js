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

import * as ImagePicker from "expo-image-picker";

const Dashboard = ({ navigation }) => {
  const [pickedImagePath, setPickedImagePath] = useState(
    "../assets.VideoExample.png"
  );
  const [popup, setpopup] = useState(0);
  const [title1, settitle1] = useState("Slag 1 -i5");
  const [title2, settitle2] = useState("Slag 2 -i6");
  const [title3, settitle3] = useState("Slag 3 -i7");
  const [date1, setdate1] = useState("09-08-2022");
  const [date2, setdate2] = useState("10-08-2022");
  const [date3, setdate3] = useState("11-08-2022");

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
              <View style={styles.empty}></View>
              <View>
                <Pressable style={styles.container} onPress={showPopUp}>
                  <View style={styles.roundConatiner}>
                    <View style={styles.conatinerPlus}>
                      <Image
                        source={require("../assets/plus.png")}
                        style={styles.img}
                      />
                    </View>
                  </View>
                  <Text style={styles.text}>Upload jouw video</Text>
                </Pressable>
              </View>
              <View style={styles.center}>
                <Card
                  title={title1}
                  date={date1}
                  source={{ uri: pickedImagePath }}
                />
              </View>
              <View style={styles.center}>
                <Card
                  title={title2}
                  date={date2}
                  source={{ uri: pickedImagePath }}
                />
              </View>
              <View style={styles.center}>
                <Card
                  title={title3}
                  date={date3}
                  source={{ uri: pickedImagePath }}
                />
              </View>
              <View>
                <Pressable style={styles.container} onPress={showPopUp}>
                  <View style={styles.roundConatiner}>
                    <View style={styles.conatinerPlus}>
                      <Image
                        source={require("../assets/image-gallery.png")}
                        style={styles.img}
                      />
                    </View>
                  </View>
                  <Text style={styles.text}>Ga naar de gallerij</Text>
                </Pressable>
              </View>
              <View style={styles.empty}></View>
            </View>
          </ScrollView>
        </View>
      </View>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  centerScroll: {
    height: "70%",
    justifyContent: "center",
  },

  ScrollView: {
    width: "100%",
    height: "100%",
  },

  container: {
    width: 130,
    height: 130,
    alignItems: "center",
  },

  roundConatiner: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  conatinerPlus: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },

  text: {
    marginTop: 10,
    fontSize: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
  },

  center: {
    justifyContent: "center",
  },

  empty: {
    width: "11%",
    height: "100%",
  },

  img: {
    width: "50%",
    height: "50%",
  },
});

export default Dashboard;
