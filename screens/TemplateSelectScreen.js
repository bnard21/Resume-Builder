import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, Button, Alert, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import TemplateSelector from "../components/TemplateSelector";
import { templates } from "../data/templates";

import {
  purchaseTemplate as purchaseTemplatePayment,
  restorePurchases,
} from "../utils/payments";

const UNLOCKED_TEMPLATES_KEY = "unlockedTemplates";

export default function TemplateSelectScreen({ navigation }) {
  // This keeps track of the template that is selected.
  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  const freeTemplateIds = templates
    .filter((template) => template.isFree)
    .map((template) => template.id);

  // This keeps track of the templates the user has purchased/unlocked.
  const [unlockedTemplates, setUnlockedTemplates] = useState(freeTemplateIds);

  const saveUnlockedTemplates = async (templatesToSave) => {
    await AsyncStorage.setItem(
      UNLOCKED_TEMPLATES_KEY,
      JSON.stringify(templatesToSave)
    );
  };

  const loadUnlockedTemplates = async () => {
    const savedTemplates = await AsyncStorage.getItem(UNLOCKED_TEMPLATES_KEY);

    if (savedTemplates) {
      const parsedTemplates = JSON.parse(savedTemplates);

      const combinedTemplates = [
        ...new Set([...freeTemplateIds, ...parsedTemplates]),
      ];

      setUnlockedTemplates(combinedTemplates);
    } else {
      setUnlockedTemplates(freeTemplateIds);
    }
  };

  useEffect(() => {
    loadUnlockedTemplates();
  }, []);

  const purchaseTemplate = async (templateId) => {
    if (unlockedTemplates.includes(templateId)) {
      return;
    }

    const result = await purchaseTemplatePayment(templateId);

    if (result.success) {
      const updatedUnlockedTemplates = [...unlockedTemplates, templateId];

      setUnlockedTemplates(updatedUnlockedTemplates);
      await saveUnlockedTemplates(updatedUnlockedTemplates);

      Alert.alert(
        "Template Unlocked",
        "This template has been unlocked and saved to your device."
      );
    }
  };

  const handleRestorePurchases = async () => {
    const result = await restorePurchases();

    if (result.success) {
      const restoredTemplates = result.restoredTemplateIds;

      const updatedUnlockedTemplates = [
        ...new Set([...freeTemplateIds, ...unlockedTemplates, ...restoredTemplates]),
      ];

      setUnlockedTemplates(updatedUnlockedTemplates);
      await saveUnlockedTemplates(updatedUnlockedTemplates);

      Alert.alert(
        "Purchases Restored",
        "Your purchased templates have been restored."
      );
    }
  };

  const useTemplate = (templateId) => {
    setSelectedTemplate(templateId);

    navigation.navigate("ResumeBuilder", {
      selectedTemplate: templateId,
    });
  };

  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Log Out",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.removeItem("isLoggedIn");
          await AsyncStorage.removeItem("loginExpiresAt");

          navigation.replace("Login");
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Choose Your Resume Template</Text>

      <Text style={styles.subtitle}>
        Pick a template, unlock it once, and use it forever.
      </Text>

      <TemplateSelector
        templates={templates}
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={useTemplate}
        unlockedTemplates={unlockedTemplates}
        purchaseTemplate={purchaseTemplate}
      />

      <View style={styles.restoreButton}>
        <Button title="Restore Purchases" onPress={handleRestorePurchases} />
      </View>

      <View style={styles.logoutButton}>
        <Button title="Log Out" onPress={handleLogout} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    marginBottom: 20,
    lineHeight: 21,
  },
  restoreButton: {
    marginTop: 6,
    marginBottom: 8,
  },
  logoutButton: {
    marginTop: -8,
    marginBottom: 12,
  },
});