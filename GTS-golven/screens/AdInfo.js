import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import Colors from "../components/Colors";
import { Snackbar } from 'react-native-paper';

const AdInfo = ({ navigation }) => {
  const [title, settitle] = useState("");
  const [golfclub, setgolfclub] = useState("");
  const [golfcourse, setgolfcourse] = useState("");
  const [datum, setdatum] = useState("");
  const [extra, setextra] = useState("");
  const [state, setState] = useState(false);

  const submit = () => {
    if (
      title === "" ||
      golfclub === "" ||
      golfcourse === "" ||
      datum === "" ||
      extra === ""
    ) {
      setState(true)
      return;
    } else {
      console.log(
        "Title:",
        title,
        "Golfclub:",
        golfclub,
        "golfcourse",
        golfcourse,
        "Datum",
        datum,
        "Extra:",
        extra
      );
      axios.post("https://api.mywebtuts.com/api/users", {
        title: title,
        golfclub: golfclub,
        golfcourse: golfcourse,
        datum: datum,
        extra: extra,
      });
      navigation.push("Dashboard");
    }
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topPic}>
        <Image
          style={styles.imageTop}
          source={require('../assets/VideoExample.png')}
        />
      </View>
      <View style={styles.topInfo}>
        <View style={styles.row}>
          <View>
            <Text style={styles.text}>Title:<Text style={styles.red}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="Slag 1"
              onChangeText={settitle}
            />
          </View>
          <View>
            <Text style={styles.text}>Golf club:<Text style={styles.red}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="5i"
              onChangeText={setgolfclub}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.text}>Golf course:<Text style={styles.red}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="Heidelberglaan 15, utrecht"
              onChangeText={setgolfcourse}
            />
          </View>
          <View>
            <Text style={styles.text}>Datum:<Text style={styles.red}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="15 maart 2021"
              onChangeText={setdatum}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomInfo}>
        <View>
          <Text style={styles.text}>Extra toevoeging:</Text>
          <TextInput
            style={styles.extraInput}
            placeholder="Bericht"
            onChangeText={setextra}
          />
        </View>
      </View>
      <View style={styles.center}>
        <Pressable style={styles.button} onPress={submit}>
          <Text style={styles.buttonText}>Bewaar</Text>
        </Pressable>
      </View>
      <Snackbar
        wrapperStyle={{ top: 40, zIndex: 10, }}
        visible={state}
        onDismiss={() => setState(false)}

      >
        Vul alle verplichte velden in
      </Snackbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  topPic: {
    alignItems: "center",
  },

  imageTop: {
    width: "100%",
    height: 250,
  },

  topInfo: {
    marginTop: 30,
    width: "100%",
    height: "15%",
    justifyContent: "space-between",
  },

  bottomInfo: {
    marginTop: 70,
    width: "100%",
    height: "27%",
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  input: {
    width: 140,
    padding: 4,
    borderBottomWidth: 1,
  },

  extraInput: {
    width: 350,
    height: 140,
    padding: 4,
    borderWidth: 1,
  },

  text: {
    fontSize: 15,
    fontWeight: "bold",
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

  center: {
    alignItems: "center",
    height: "100%",
  },

  red: {
    color: "red",
  }
});

export default AdInfo;
