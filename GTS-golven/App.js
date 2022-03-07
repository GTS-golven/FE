import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from './components/Colors';

import Dashboard from './screen/Dashboard'
import Gallery from './screen/Gallery'

import Login from './screen/Login'
import WachtwoordVergeten from './screen/WachtwoordVergeten'
import VerranderWachtwoord from './screen/VerranderWachtwoord'


export default function App() {


  return (
    <View style={styles.screen}>
      <Login style={styles.show} onPress={() => {}}/>
      <WachtwoordVergeten style={styles.hide} />
      <VerranderWachtwoord style={styles.hide} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgournd,
  },
});