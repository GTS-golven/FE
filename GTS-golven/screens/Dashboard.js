import React, { useState, useRef, useEffect } from "react";
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
import NavBar from "../components/NavBar";
import Popup from "../components/Popup";

const Dashboard = ({ navigation }) => {
  const bs = useRef();
  const [title, setTitle] = useState("Slag 1 -i5");
  const [date, setdate] = useState("09-08-2022");
  const [state, setState] = useState(false);
  const [pickedImagePath, setPickedImagePath] = useState(
    "../assets.VideoExample.png"
  );
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (value) {
      bs.current.snapTo(0);
    }
  }, [value]);

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
              <View>
                <Pressable
                  style={styles.container}
                  onPress={() => setValue(true)}
                >
                  <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                      <Image
                        style={styles.img}
                        source={require("../assets/plus.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>Video uploaden</Text>
                  </View>
                </Pressable>
              </View>
              <View>
                <Card
                  title={title}
                  date={date}
                  source={{ uri: pickedImagePath }}
                />
              </View>
              <View>
                <Pressable style={styles.container}>
                  <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                      <Image
                        style={styles.img}
                        source={require("../assets/image-gallery.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>Gallerij</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      {value && <Popup bs={bs} setValue={setValue} />}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  centerScroll: {
    justifyContent: "center",
  },

  ScrollView: {
    width: "100%",
    height: "70%",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "30%",
    paddingRight: "30%",
  },

  container: {
    height: "30%",
    width: "100%",
  },

  buttonContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    backgroundColor: Colors.primary,
  },

  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginTop: 10,
    fontSize: 20,
  },

  img: {
    width: "50%",
    height: "50%",
  },
});

export default Dashboard;
