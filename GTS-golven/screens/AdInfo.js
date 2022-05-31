import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import axios from "axios";
import Colors from "../components/Colors";
import { Snackbar } from "react-native-paper";
import { DatePicker } from "react-native-woodpicker";
import { Video, AVPlaybackStatus } from "expo-av";

const AdInfo = ({ navigation }) => {
  const [title, settitle] = useState("");
  const [golfclub, setgolfclub] = useState("");
  const [golfcourse, setgolfcourse] = useState("");
  const [datum, setdatum] = useState("");
  const [extra, setextra] = useState("");
  const [state, setState] = useState(false);
  const [pickedDate, setPickedDate] = useState();
  const [video, setVideo] = useState();
  const [id, setId] = useState();
  const videoRef = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/videos/");
    setId(response.data.id);
    setVideo(response.data.video);
  }, []);

  const submit = () => {
    if (
      title === "" ||
      golfclub === "" ||
      golfcourse === "" ||
      datum === null
    ) {
      setState(true);
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
        pickedDate,
        "Extra:",
        extra
      );
      axios.post("https://api.mywebtuts.com/api/users", {
        title: title,
        golfclub: golfclub,
        golfcourse: golfcourse,
        datum: pickedDate,
        extra: extra,
      });
      navigation.push("Dashboard");
    }
  };

  const handleText = () =>
    pickedDate ? pickedDate.toDateString() : "30-mei-2022";

  return (
    <View style={styles.screen}>
      <View style={styles.topPic}>
        <Video
          ref={videoRef}
          style={styles.video}
          source="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          useNativeControls
          resizeMode="contain"
          isLooping
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.topInfo}>
          <View style={styles.row}>
            <View>
              <Text style={styles.text}>
                Title:<Text style={styles.red}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Slag 1"
                onChangeText={settitle}
              />
            </View>
            <View>
              <Text style={styles.text}>
                Golf club:<Text style={styles.red}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="5i"
                onChangeText={setgolfclub}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={styles.text}>
                Golf course:<Text style={styles.red}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Heidelberglaan 15, utrecht"
                onChangeText={setgolfcourse}
              />
            </View>
            <View>
              <DatePicker
                value={pickedDate}
                onDateChange={setPickedDate}
                title="30-5-2022"
                text={handleText()}
                doneButtonLabel="Kies"
                isNullable={false}
                iosDisplay="spinner"
                backdropAnimation={{ opacity: 0 }}
                minimumDate={new Date(Date.now())}
                maximumDate={new Date(Date.now() + 2000000000)}
                iosMode="datetime"
                androidMode="datetime"
                androidDisplay="spinner"
                locale="nl"
                touchableStyle={{
                  borderWidth: 1,
                  padding: 8,
                  borderRadius: 10,
                  width: "35%",
                  height: "100%",
                }}
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
      </View>
      <Snackbar
        wrapperStyle={{ top: 40, zIndex: 10 }}
        visible={state}
        onDismiss={() => setState(false)}
      >
        Vul alle verplichte velden in
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  contentContainer: {
    height: "100%",
  },

  topPic: {
    alignItems: "center",
    width: "100%",
    height: "30%",
  },

  imageTop: {
    width: "100%",
    height: "100%",
  },

  topInfo: {
    marginTop: 30,
    width: "100%",
    height: "15%", // phone 20 demo
    justifyContent: "space-between",
  },

  bottomInfo: {
    marginTop: 10,
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
    height: "5,5%", // phone 5,5 demo
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
  },

  video: {
    alignSelf: "center",
    width: "100%",
    height: 300,
  },
});

export default AdInfo;
