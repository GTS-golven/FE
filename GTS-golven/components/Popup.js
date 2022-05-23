import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import Colors from "./Colors";

import { Snackbar } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const popup = ({ bs, setValue }) => {
  const nav = useNavigation();
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (video) {
      console.log(video);
    }
  });

  const pickVideo = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted !== false) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setVideo(result.uri);
        nav.navigate("Load");
      }
    } else {
      setState(true);
      return;
    }
  };

  const takeVideo = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted !== false) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setVideo(result.uri);
        nav.navigate("Load");
      }
    } else {
      setState2(true);
      return;
    }
  };

  const fall = new Animated.Value(1);

  const renderInner = () => (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Video uploaden</Text>
        <Text style={styles.subtitle}>Kies een foto van je bibliotheek</Text>
      </View>
      <TouchableOpacity style={styles.btnContainer} onPress={() => takeVideo()}>
        <Text style={styles.btnTitle}>Maak een video</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnContainer} onPress={() => pickVideo()}>
        <Text style={styles.btnTitle}>Kies een video van je bibliotheek</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => {
          bs.current.snapTo(1);
          setValue(false);
        }}
      >
        <Text style={styles.btnTitle}>terug</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.sleepContainer}>
        <View style={styles.sleepKnop} />
      </View>
    </View>
  );
  return (
    <View style={styles.screen}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        onCloseStart={() => setValue(false)}
      />
      <Snackbar
        wrapperStyle={{ top: 40, zIndex: 10 }}
        visible={state}
        onDismiss={() => setState(false)}
      >
        Wij hebben toegang nodig tot uw video gallerij
      </Snackbar>
      <Snackbar
        wrapperStyle={{ top: 40, zIndex: 10 }}
        visible={state}
        onDismiss={() => setState2(false)}
      >
        Wij hebben toegang tot uw camera nodig
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    zIndex: 10000,
    elevation: 10000,
  },

  headerContainer: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.black,
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  sleepContainer: {
    alignItems: "center",
  },

  sleepKnop: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.button1,
    marginBottom: 10,
  },

  container: {
    backgroundColor: Colors.primary,
    height: 3000,
    alignItems: "center",
  },

  title: {
    fontSize: 27,
    height: 35,
    color: Colors.text,
  },

  subtitle: {
    fontSize: 14,
    color: Colors.subText,
    height: 30,
    marginBottom: 10,
  },

  btnContainer: {
    width: "90%",
    padding: 13,
    borderRadius: 15,
    backgroundColor: Colors.button1,
    alignItems: "center",
    marginVertical: 7,
  },

  btnTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.white,
  },
});

export default popup;
