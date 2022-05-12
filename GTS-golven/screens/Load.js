import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Colors from "../components/Colors";

const Load = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.push("AdInfo")
    }, 5000);
  })

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.mainContainer}>
        <View style={styles.loadBar}>
          <Image
            style={styles.image}
            source={require("../assets/VideoExample.png")}
          />
          <Text style={styles.procent}>100%</Text>
        </View>
      </View>
      <View style={styles.hintContainer}>
        <Text style={styles.title}>Hint:</Text>
        <Text style={styles.text}>Jouw slagen zijn echt helemaal ruk!!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  mainContainer: {
    height: "60%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  hintContainer: {
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  image: {
    width: 320,
    height: 200,
    opacity: 0.5,
  },

  loadBar: {
    borderWidth: 9,
    borderColor: Colors.button2,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  text: {
    fontSize: 15,
  },

  procent: {
    position: "absolute",
    top: "45%",
    left: "36%",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Load;
