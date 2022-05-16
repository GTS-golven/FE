import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import Colors from "./Colors";

const popup = ({ bs }) => {
  const fall = new Animated.Value(1);

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Video uploaden</Text>
        <Text style={styles.panelSubtitle}>
          Kies een foto van je bibliotheek
        </Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={() => maakVideo}>
        <Text style={styles.panelButtonTitle}>Maak een video</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={() => kiesVideo}>
        <Text style={styles.panelButtonTitle}>
          Kies een video van je bibliotheek
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>terug</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
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
  header: {
    backgroundColor: Colors.primary,
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  panel: {
    backgroundColor: Colors.primary,
  },

  panelHeader: {
    alignItems: "center",
  },

  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.button1,
    marginBottom: 10,
  },

  panelTitle: {
    fontSize: 27,
    height: 35,
  },

  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },

  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: Colors.button1,
    alignItems: "center",
    marginVertical: 7,
  },

  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});

export default popup;
