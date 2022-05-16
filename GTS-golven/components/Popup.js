import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import Colors from "./Colors";

const popup = ({ bs }) => {
  const fall = new Animated.Value(1);

  const renderInner = () => (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Video uploaden</Text>
        <Text style={styles.subtitle}>Kies een foto van je bibliotheek</Text>
      </View>
      <TouchableOpacity style={styles.btnContainer} onPress={() => maakVideo}>
        <Text style={styles.btnTitle}>Maak een video</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnContainer} onPress={() => kiesVideo}>
        <Text style={styles.btnTitle}>Kies een video van je bibliotheek</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.btnTitle}>terug</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.sleepContainer}>
        <View style={styles.sleepKnop} />
      </View>
    </View>
  );
  return (
    <BottomSheet
      ref={bs}
      snapPoints={[330, 0]}
      renderContent={renderInner}
      renderHeader={renderHeader}
      initialSnap={0}
      callbackNode={fall}
      enabledGestureInteraction={true}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.black,
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  sleepContainer: {
    alignItems: "center",
  },

  sleepKnop: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.button1,
    marginBottom: 10,
  },

  container: {
    backgroundColor: Colors.primary,
  },

  title: {
    fontSize: 27,
    height: 35,
    color: Colors.text,
  },

  subtitle: {
    fontSize: 14,
    color: Colors.subText,
    height: 30,
    marginBottom: 10,
  },

  btnContainer: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: Colors.button1,
    alignItems: "center",
    marginVertical: 7,
  },

  btnTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.text,
  },
});

export default popup;
