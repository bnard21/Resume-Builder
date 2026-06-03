import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginScreen from "./screens/LoginScreen";
import TemplateSelectScreen from "./screens/TemplateSelectScreen";
import ResumeBuilderScreen from "./screens/ResumeBuilderScreen";
import ResumePreviewScreen from "./screens/ResumePreviewScreen";

import { ResumeProvider } from "./context/ResumeContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckingLogin, setIsCheckingLogin] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const savedLoginStatus = await AsyncStorage.getItem("isLoggedIn");
      const savedExpiration = await AsyncStorage.getItem("loginExpiresAt");

      const currentTime = Date.now();

      if (
        savedLoginStatus === "true" &&
        savedExpiration &&
        currentTime < Number(savedExpiration)
      ) {
        setIsLoggedIn(true);
      } else {
        await AsyncStorage.removeItem("isLoggedIn");
        await AsyncStorage.removeItem("loginExpiresAt");
        setIsLoggedIn(false);
      }

      setIsCheckingLogin(false);
    };

    checkLoginStatus();
  }, []);

  if (isCheckingLogin) {
    return null;
  }

  return (
    <ResumeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isLoggedIn ? "TemplateSelect" : "Login"}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Login" }}
          />

          <Stack.Screen
            name="TemplateSelect"
            component={TemplateSelectScreen}
            options={{ title: "Choose Template" }}
          />

          <Stack.Screen
            name="ResumeBuilder"
            component={ResumeBuilderScreen}
            options={{ title: "Resume Builder" }}
          />

          <Stack.Screen
            name="ResumePreview"
            component={ResumePreviewScreen}
            options={{ title: "Resume Preview" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ResumeProvider>
  );
}