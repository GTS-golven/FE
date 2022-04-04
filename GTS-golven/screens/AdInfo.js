import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";
import Colors from "../components/Colors";

const AdInfo = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topPic}>
        <Image
          style={styles.imageTop}
          source={require("../assets/oudere-mannen-golf.jpg")}
        />
      </View>
      <View style={styles.topInfo}>
        <View style={styles.row}>
          <View>
            <Text style={styles.text}>Title:</Text>
            <TextInput style={styles.input} placeholder="Slag 1" />
          </View>
          <View>
            <Text style={styles.text}>Golf club:</Text>
            <TextInput style={styles.input} placeholder="5i" />
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.text}>Golf course:</Text>
            <TextInput
              style={styles.input}
              placeholder="Heidelberglaan 15, utrecht"
            />
          </View>
          <View>
            <Text style={styles.text}>Datum:</Text>
            <TextInput style={styles.input} placeholder="15 maart 2021" />
          </View>
        </View>
      </View>
      <View style={styles.bottomInfo}>
        <View>
          <Text style={styles.text}>Extra toevoeging:</Text>
          <TextInput style={styles.extraInput} placeholder="Bericht" />
        </View>
      </View>
      <View style={styles.center}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.push("Dashboard");
          }}
        >
          <Text style={styles.buttonText}>Bewaar</Text>
        </Pressable>
      </View>
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
});

export default AdInfo;
