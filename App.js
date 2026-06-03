import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TemplateSelectScreen from "./screens/TemplateSelectScreen";
import ResumeBuilderScreen from "./screens/ResumeBuilderScreen";
import ResumePreviewScreen from "./screens/ResumePreviewScreen";

import { ResumeProvider } from "./context/ResumeContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ResumeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TemplateSelect">
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