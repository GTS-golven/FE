import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from './components/Colors';

import Start from './screens/Start'

import Login from './screens/Login'
import WachtwoordVergeten from './screens/WachtwoordVergeten'
import VerranderWachtwoord from './screens/VerranderWachtwoord'

import Aanmelden from './screens/Aanmelden'
import ConfirmMail from './screens/ConfirmMail'

import Dashboard from './screens/Dashboard'
import Gallery from './screens/Gallery'
import Profiel from './screens/Profiel'
import Settings from './screens/Settings'

const AuthStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen options={{ headerShown: false }} name="Start" component={Start} />
        <AuthStack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <AuthStack.Screen options={{ headerShown: false }} name="WachtwoordVergeten" component={WachtwoordVergeten} />
        <AuthStack.Screen options={{ headerShown: false }} name="VerranderWachtwoord" component={VerranderWachtwoord} />
        <AuthStack.Screen options={{ headerShown: false }} name="Aanmelden" component={Aanmelden} />
        <AuthStack.Screen options={{ headerShown: false }} name="ConfirmMail" component={ConfirmMail} />
        <AuthStack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
        <AuthStack.Screen options={{ headerShown: false }} name="Gallery" component={Gallery} />
        <AuthStack.Screen options={{ headerShown: false }} name="Profiel" component={Profiel} />
        <AuthStack.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgournd,
  },
});

export default App;