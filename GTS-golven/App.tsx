import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Start from "./screens/Start";

import Login from "./screens/Login";
import WachtwoordVergeten from "./screens/WachtwoordVergeten";
import VerranderWachtwoord from "./screens/VerranderWachtwoord";

import Aanmelden from "./screens/Aanmelden";
import ConfirmMail from "./screens/ConfirmMail";

import Dashboard from "./screens/Dashboard";
import Gallery from "./screens/Gallery";
import Profiel from "./screens/Profiel";
import Settings from "./screens/Settings";
import Vragen from "./screens/Vragen";
import Contact from "./screens/Contact";

import WatIsData from "./screens/WatIsData";
import MaakVideo from "./screens/MaakVideo";
import AccuraatData from "./screens/AccuraatData";
import NewPassword from "./screens/NewPassword";
import Load from "./screens/Load";
import AdInfo from "./screens/AdInfo";

import testDrawer from "./screens/testDrawer";

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
            options={{ headerShown: false, animation: "fade" }}
            name="Gallery"
            component={Gallery}
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
