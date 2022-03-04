import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from './components/Colors';

import Dashboard from './screen/Dashboard'
import Gallery from './screen/Gallery'
import Login from './screen/Login'


export default function App() {
  return (
    <View style={styles.screen}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgournd,
  },
});