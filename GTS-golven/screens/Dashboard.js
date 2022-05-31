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
import Gallery from "../components/Gallery";
import VideoExample from "../assets/VideoExample.png";
import balBaan from "../assets/balbaan.jpg";

const Dashboard = ({ navigation }) => {
  const bs = useRef();
  const [state, setState] = useState(false);
  const [value, setValue] = useState(false);

  const cardElements = [
    {
      id: 1,
      title: "Slag 1 -i5",
      date: "09-08-2022",
      video: VideoExample,
    },
    {
      id: 2,
      title: "Slag 2 -i5",
      date: "10-08-2022",
      video: VideoExample,
    },
    {
      id: 3,
      title: "Slag 3 -i5",
      date: "11-08-2022",
      video: VideoExample,
    },
  ];

  const galleryElement = [
    {
      id: 1,
      video: VideoExample,
      title: "Slag 1 -i5",
      rpm: "--",
      heigt: "--",
      travel: "--",
      angle: "--",
      xas: "--",
      airtime: "--",
      model: balBaan,
    },
    {
      id: 2,
      video: VideoExample,
      title: "Slag 2 -i5",
      rpm: "--",
      heigt: "--",
      travel: "--",
      angle: "--",
      xas: "--",
      airtime: "--",
      model: balBaan,
    },
    {
      id: 3,
      video: VideoExample,
      title: "Slag 3 -i5",
      rpm: "--",
      heigt: "--",
      travel: "--",
      angle: "--",
      xas: "--",
      airtime: "--",
      model: balBaan,
    },
  ];

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
              <View style={styles.row}>
                {cardElements.map((element) => {
                  return (
                    <Pressable key={element.id}>
                      <Card
                        title={element.title}
                        date={element.date}
                        source={element.video}
                      />
                    </Pressable>
                  );
                })}
                {/* {galleryElement.map((element) => {
                  return (
                    <Gallery
                      key={element[0].id}
                      video={element[0].video}
                      rpm={element[0].rpm}
                      heigt={element[0].heigt}
                      travel={element[0].travel}
                      angle={element[0].angle}
                      xas={element[0].xas}
                      airtime={element[0].airtime}
                      model={element[0].model}
                    />
                  );
                })} */}
              </View>
              {/* <View>
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
              </View> */}
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
    height: "30%", // phone 30% demo 550
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "30%",
    paddingRight: "6%",
  },

  container: {
    height: "30%", // phone 30 demo 134
    width: "100%",
    marginBottom: 100,
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

  row: {
    flexDirection: "row",
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
