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

import Colors from "../../components/Colors";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import Popup from "../../components/Popup";
import Gallery from "../../components/Gallery";
import axios from "axios";
import simulatie from "../../assets/simulation.png";
import { getNativeSourceAndFullInitialStatusForLoadAsync } from "expo-av/build/AV";

const Dashboard = ({ navigation }) => {
  const bs = useRef();
  const [value, setValue] = useState(false);
  const [data, setData] = useState([]); //[]
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState("online");

  useEffect(async () => {
    try {
      const response = await axios.get("http://10.0.2.2:8000/api/videos/");
      setData(response.data.results);
      setStatus("online");
    } catch (e) {
      setStatus("offline");
    }
  }, []);

  useEffect(() => {
    if (value) {
      bs.current.snapTo(0);
    }
  }, [value]);

  return (
    <View style={styles.screen}>
      {status === "offline" ? (
        <View style={styles.offlineContainer}>
          <Image
            style={styles.offlineImg}
            source={require("../../assets/error.png")}
          />
          <Text style={styles.offlineText}>
            Je bent niet verbonden met het internet
          </Text>
        </View>
      ) : (
        <View style={styles.centerScroll}>
          <ScrollView
            horizontal={true}
            alwaysBounceHorizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.ScrollView}
            contentContainerStyle={{
              paddingLeft: "30%",
              paddingRight: "10%",
              paddingVertical: "20%",
            }}
          >
            <View>
              <Pressable
                style={styles.container}
                onPress={() => setValue(true)}
              >
                <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                    <Image
                      style={styles.img}
                      source={require("../../assets/plus.png")}
                    />
                  </View>
                </View>
                <View style={styles.textContainer}>
                  {data.length === 0 ? (
                    <Text style={styles.text}>
                      Zet jouw eerste video er in om jouw golf process bij te
                      houden
                    </Text>
                  ) : (
                    <Text style={styles.text}>Video uploaden</Text>
                  )}
                </View>
              </Pressable>
            </View>
            {data.length === 0
              ? null
              : data?.map((element) => {
                  return (
                    <View key={element.id}>
                      <Pressable
                        style={{ height: "35%", width: "100%" }}
                        onPress={() => {
                          setModalVisible(true);
                        }}
                      >
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
          </ScrollView>
        </View>
      )}
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
    flex: 1,
  },

  ScrollView: {
    flex: 1,
    flexDirection: "row",
  },

  container: {
    height: 160,
    width: 160,
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

  textContainer: {
    alignItems: "center",
  },

  text: {
    width: 200,
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
  },

  img: {
    width: "50%",
    height: "50%",
  },

  offlineContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  offlineImg: {
    width: 64,
    height: 64,
  },

  offlineText: {
    fontSize: 15,
  },
});

export default Dashboard;
