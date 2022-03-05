import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from './components/Colors';

import Dashboard from './screen/Dashboard';

export default function App() {
  return (
    <View style={styles.screen}>
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgournd,
  },
});
