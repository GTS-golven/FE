import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Start from "./screens/LoginScreens/Start.js";

import Login from "./screens/LoginScreens/Login";
import WachtwoordVergeten from "./screens/LoginScreens/WachtwoordVergeten";
import VerranderWachtwoord from "./screens/LoginScreens/VerranderWachtwoord";

import Aanmelden from "./screens/LoginScreens/Aanmelden";
import ConfirmMail from "./screens/LoginScreens/ConfirmMail";

import Dashboard from "./screens/AppScreens/Dashboard";
import Profiel from "./screens/AppScreens/Profiel";
import Settings from "./screens/AppScreens/Settings";
import Vragen from "./screens/AppScreens/Vragen";
import Contact from "./screens/AppScreens/Contact";

import WatIsData from "./screens/AppScreens/MostAskedQuistions/MeaningData";
import MaakVideo from "./screens/AppScreens/MostAskedQuistions/HowToMakeVideo";
import AccuraatData from "./screens/AppScreens/MostAskedQuistions/AcuratData";
import NewPassword from "./screens/AppScreens/NewPassword";
import Load from "./screens/AppScreens/Load";
import AdInfo from "./screens/AppScreens/AdInfo";

const AuthStack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen
            options={{ headerShown: false, animation: "none" }}
            name="Dashboard"
            component={Dashboard}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="Start"
            component={Start}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="Login"
            component={Login}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="WachtwoordVergeten"
            component={WachtwoordVergeten}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="VerranderWachtwoord"
            component={VerranderWachtwoord}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="Aanmelden"
            component={Aanmelden}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="ConfirmMail"
            component={ConfirmMail}
          />

          {/* <AuthStack.Screen
            options={{ headerShown: false, animation: "none" }}
            name="Dashboard"
            component={Dashboard}
          /> */}
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="Load"
            component={Load}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="AdInfo"
            component={AdInfo}
          />

          <AuthStack.Screen
            options={{ headerShown: false, animation: "none" }}
            name="Profiel"
            component={Profiel}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "none" }}
            name="Settings"
            component={Settings}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="Vragen"
            component={Vragen}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="MaakVideo"
            component={MaakVideo}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="WatIsData"
            component={WatIsData}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="AccuraatData"
            component={AccuraatData}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="Contact"
            component={Contact}
          />
          <AuthStack.Screen
            options={{ headerShown: false, animation: "fade" }}
            name="NewPassword"
            component={NewPassword}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
