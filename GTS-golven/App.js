import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from './components/Colors';

import Dashboard from './screen/Dashboard'
import Gallery from './screen/Gallery'

import Login from './screen/Login'
import WachtwoordVergeten from './screen/WachtwoordVergeten'
import VerranderWachtwoord from './screen/VerranderWachtwoord'


export default function App() {
  const [logIn, setlogIn] = useState(0);

  const restart = () => {
    setlogIn(0)
  }

  const wachtwoordVergeten = () => {
    setlogIn(1)
  }

  const verranderWachtwoord = () => {
    setlogIn(2)
  }

  const dashboard = () => {
    setlogIn(3)
  }

  let content = <Login toWachtwoordVergeten={wachtwoordVergeten} toDashboard={dashboard}/>

  if (logIn === 1) {
    content = <WachtwoordVergeten toVerranderWachtwoord={verranderWachtwoord}/>
  } if (logIn === 2) {
    content = <VerranderWachtwoord toLogin={restart}/>
  } if (logIn === 3) {
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