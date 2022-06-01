import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Colors from "./Colors";
import { useNavigation } from "@react-navigation/native";
import { Video, AVPlaybackStatus } from "expo-av";

const Dashboard = (props) => {
  const navigation = useNavigation();
  const videoRef = React.useRef(null);

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Video
          ref={videoRef}
          style={styles.video}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          resizeMode="contain"
          playableDurationMillis={1}
        />
        <View style={styles.text}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  video: {
    width: 200,
    height: 110,
    position: "absolute",
    zIndex: 100,
    borderRadius: 10,
    top: -50,
    left: 50,
    resizeMode: "cover",
  },

  card: {
    justifyContent: "space-evenly",
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
    width: 300,
    height: 200,
    borderRadius: 20,
  },

  text: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  date: {
    fontSize: 11,
  },
});

export default Dashboard;
