import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Colors from "./Colors";
import { useNavigation } from "@react-navigation/native";

const Dashboard = (props) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Gallery")}>
      <View style={styles.screen}>
        <Image style={styles.image} source={props.source} />
        <View style={styles.card}>
          <View style={styles.text}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.date}>{props.date}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  image: {
    width: 200,
    height: 110,
    position: "absolute",
    zIndex: 100,
    borderRadius: 10,
    top: -50,
    resizeMode: "cover",
  },

  card: {
    justifyContent: "space-evenly",
    backgroundColor: Colors.primary,
    padding: 10,
    marginLeft: 10,
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
