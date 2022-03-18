import React, { useState, useContext, createContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from './components/Colors';

import Start from './screens/Start'
import NavBar from './components/NavBar'

import Login from './screens/Login'
import WachtwoordVergeten from './screens/WachtwoordVergeten'
import VerranderWachtwoord from './screens/VerranderWachtwoord'

import Aanmelden from './screens/Aanmelden'
import ConfirmMail from './screens/ConfirmMail'

import Dashboard from './screens/Dashboard'
import Gallery from './screens/Gallery'
import Profiel from './screens/Profiel';

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

  const aanmelden = () => {
    setlogIn(4)
  }

  const confirmMail = () => {
    setlogIn(5)
  }

  const dashboard = () => {
    setlogIn(6)
  }

  const gallery = () => {
    setlogIn(7)
  }

  let content = <Start onInlog={inlog} onAanmelden={aanmelden} />

  if (logIn === 1) {
    content = <Login toWachtwoordVergeten={wachtwoordVergeten} toDashboard={dashboard} />
  } if (logIn === 2) {
    content = <WachtwoordVergeten toVerranderWachtwoord={verranderWachtwoord} />
  } if (logIn === 3) {
    content = <VerranderWachtwoord toLogin={inlog} />
  } if (logIn === 4) {
    content = <Aanmelden onMeldaan={confirmMail} />
  } if (logIn === 5) {
    content = <ConfirmMail toStart={inlog} />
  } if (logIn === 6) {
    content = <Dashboard toGallery={gallery} />
  } if (logIn === 7) {
    content = <Gallery toHome={dashboard} />
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