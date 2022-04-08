import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import NavBar from "../components/NavBar";

const WatIsData = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.topInfo}>
          <Text style={styles.title}>Wat betekent de data:</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit mollis nec
            pharetra, placerat gravida elementum ac tristique magna mattis
            mauris. Lacus conubia cubilia facilisi vitae imperdiet curae
            ullamcorper fusce facilisis, hac ornare dignissim leo magna augue
            faucibus congue egestas, ultricies lacinia proin nam eu quisque
            nascetur mus. Erat montes etiam ridiculus per integer hendrerit
            malesuada platea, quisque laoreet turpis non curabitur varius
            dignissim vehicula urna, tortor phasellus sed lacus donec primis
            mattis.
          </Text>
        </View>
        <View style={styles.bottomInfo}>
          <Text style={styles.title}>Voorbeeld:</Text>
          <Image
            style={styles.image}
            source={require("../assets/VideoExample.png")}
          />
        </View>
      </View>
      <NavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },

  container: {
    height: "80%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  topInfo: {
    width: "80%",
    height: "40%",
  },

  bottomInfo: {
    width: "80%",
    height: "40%",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  text: {
    fontSize: 15,
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: 200,
  },
});

export default WatIsData;
