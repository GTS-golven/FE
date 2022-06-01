import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  Modal,
  StyleSheet,
} from "react-native";

import Colors from "../components/Colors";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Popup from "../components/Popup";
import Gallery from "../components/Gallery";
import axios from "axios";
import simulatie from "../assets/simulation.png";

const Dashboard = ({ navigation }) => {
  const bs = useRef();
  const [value, setValue] = useState(false);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(async () => {
    try {
      const response = await axios.get("http://10.0.2.2:8000/api/videos/");
      setData(response.data.results);
    } catch (e) {
      console.log("error", e);
    }
  }, []);

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
                {data?.map((element) => {
                  return (
                    <View key={element.id}>
                      <Pressable
                        onPress={() => {
                          console.log("press worked");
                        }}
                      >
                        {/* setModalVisible(true) */}
                        <Card
                          title={
                            element.title === undefined
                              ? "Geen title gekozen"
                              : element.title
                          }
                          date={
                            element.date === undefined
                              ? "Geen datum gekozen"
                              : element.title
                          }
                          source={element.video}
                        />
                      </Pressable>
                      <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                          Alert.alert("Modal has been closed.");
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Gallery
                          video={element.video}
                          rpm={element.rpm === undefined ? "--" : element.rpm}
                          heigt={
                            element.heigt === undefined ? "--" : element.heigt
                          }
                          travel={
                            element.travel === undefined ? "--" : element.travel
                          }
                          angle={
                            element.angle === undefined ? "--" : element.angle
                          }
                          xas={element.xas === undefined ? "--" : element.xas}
                          airtime={
                            element.airtime === undefined
                              ? "--"
                              : element.airtime
                          }
                          model={
                            element.model === undefined
                              ? simulatie
                              : element.rpm
                          }
                        />
                      </Modal>
                    </View>
                  );
                })}
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
    height: "75%",
    paddingHorizontal: "30%",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
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
