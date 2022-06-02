import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import NavBar from "../components/NavBar";
import Colors from "../components/Colors";
import { Video, AVPlaybackStatus } from "expo-av";
import axios from "axios";

const Gallery = (props) => {
  const videoRef = React.useRef(null);
  const [video, setVideo] = useState();
  const [id, setId] = useState();

  useEffect(async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/videos/");
    setId(response.data.id);
    setVideo(response.data.video);
  }, []);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.topPic}>
            <Video
              ref={videoRef}
              style={styles.video}
              source={{
                uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
            />
            <Text style={styles.text}>{props.title}</Text>
          </View>
          <View style={styles.infoConainer}>
            <View style={styles.row}>
              <View style={styles.container}>
                <Text style={styles.text2}>RPM</Text>
                <Text style={styles.text3}>{props.rpm}</Text>
                <Text style={styles.text4}>rpm</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text2}>Height</Text>
                <Text style={styles.text3}>{props.heigt}</Text>
                <Text style={styles.text4}>meter</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.container}>
                <Text style={styles.text2}>Travel</Text>
                <Text style={styles.text3}>{props.travel}</Text>
                <Text style={styles.text4}>meter</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text2}>Angle</Text>
                <Text style={styles.text3}>{props.angle}</Text>
                <Text style={styles.text4}>graden</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.container}>
                <Text style={styles.text2}>x-as</Text>
                <Text style={styles.text3}>{props.xas}</Text>
                <Text style={styles.text4}>graden</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text2}>Air time</Text>
                <Text style={styles.text3}>{props.airtime}</Text>
                <Text style={styles.text4}>seconden</Text>
              </View>
            </View>
            <View style={styles.bottomPic}>
              <Image style={styles.imageBottom} source={props.model} />
            </View>
          </View>
        </View>
      </ScrollView>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgournd,
  },

  mainContainer: {
    flex: 1,
    marginBottom: 70,
  },

  topPic: {
    alignItems: "center",
  },

  infoConainer: {
    width: "100%",
    height: 850,
    justifyContent: "space-evenly",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  container: {
    backgroundColor: Colors.primary,
    width: 140,
    height: 140,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  video: {
    marginTop: -50,
    width: "100%",
    height: 300,
  },

  bottomPic: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  imageBottom: {
    width: "80%",
    height: 300,
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
  },

  text2: {
    fontSize: 20,
    position: "absolute",
    top: 0,
  },
  text3: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text4: {
    fontSize: 15,
    position: "absolute",
    bottom: 10,
    right: 20,
  },
});

export default Gallery;
