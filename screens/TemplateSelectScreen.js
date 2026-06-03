import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import TemplateSelector from "../components/TemplateSelector";
import { templates } from "../data/templates";

export default function TemplateSelectScreen({ navigation }) {
    //This keeps track of the template that is selected.
  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  const freeTemplateIds = templates
    .filter((template) => template.isFree)
    .map((template) => template.id);

    //This keeps track of the template the user has purchased/unlocked.
  const [unlockedTemplates, setUnlockedTemplates] = useState(freeTemplateIds);

  const purchaseTemplate = (templateId) => {
    if (unlockedTemplates.includes(templateId)) {
      return;
    }

    setUnlockedTemplates([...unlockedTemplates, templateId]);
  };

  const useTemplate = (templateId) => {
    setSelectedTemplate(templateId);

    navigation.navigate("ResumeBuilder", {
      selectedTemplate: templateId,
    });
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
});