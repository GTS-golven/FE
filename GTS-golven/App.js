import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from './components/Colors';

import Dashboard from './screen/Dashboard'
import Gallery from './screen/Gallery'


import Start from './screen/Start'
import Login from './screen/Login'
import WachtwoordVergeten from './screen/WachtwoordVergeten'
import VerranderWachtwoord from './screen/VerranderWachtwoord'


export default function App() {
  const [logIn, setlogIn] = useState(0);

  const restart = () => {
    setlogIn(0)
  }

  const inlog = () => {
    setlogIn(1)
  }

  const wachtwoordVergeten = () => {
    setlogIn(2)
  }

  const verranderWachtwoord = () => {
    setlogIn(3)
  }

  const dashboard = () => {
    setlogIn(4)
  }

  let content = <Start onInlog={inlog} />

  if (logIn === 1) {
    content = <Login toWachtwoordVergeten={wachtwoordVergeten} toDashboard={dashboard} />
  } if (logIn === 2) {
    content = <WachtwoordVergeten toVerranderWachtwoord={verranderWachtwoord} />
  } if (logIn === 3) {
    content = <VerranderWachtwoord toLogin={restart} />
  } if (logIn === 4) {
    content = <Dashboard />
  }

  return (
    <View style={styles.screen}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgournd,
  },
});