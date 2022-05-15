import "react-native-gesture-handler";
import React, { useState, useMemo, useRef, useEffect } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const App = ({ childFunc }) => {
  const nav = useNavigation();
  const [pickedImagePath, setPickedImagePath] = useState(
    "../assets.VideoExample.png"
  );

  React.useEffect(() => {
    childFunc.current = handleExpandPress;
  }, []);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["25%", "100%"], []);

  const handleClosePress = () => bottomSheetRef.current?.close();

  const handleExpandPress = () => bottomSheetRef.current?.expand();

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Je hebt toegang tot de camera geweigerd!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      nav.navigate("Load");
      setPickedImagePath(result.uri);
    }
  };

  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Je hebt toegang tot de cameraroll geweirgerd");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      nav.navigate("Load");
      setPickedImagePath(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        detached={true}
        enablePanDownToClose={true}
      >
        <View>
          <Pressable onPress={openCamera} style={styles.btnContainer}>
            <View style={styles.row}>
              <Image
                style={styles.img}
                source={require("../assets/camera.png")}
              />
              <Text style={styles.text}>Camera</Text>
            </View>
          </Pressable>
          <Pressable onPress={showImagePicker} style={styles.btnContainer}>
            <View style={styles.row}>
              <Image
                style={styles.img}
                source={require("../assets/video-gallery.png")}
              />
              <Text style={styles.text}>Gallerij</Text>
            </View>
          </Pressable>
          <Pressable style={styles.btnContainer} onPress={handleClosePress}>
            <View style={styles.row}>
              <Text style={styles.text}>Sluit</Text>
            </View>
          </Pressable>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  btnContainer: {
    width: "100%",
    height: "33%",
    justifyContent: "center",
    borderBottomWidth: 1,
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
  },

  img: {
    width: "8%",
    resizeMode: "contain",
    marginRight: 10,
  },
});

export default App;
