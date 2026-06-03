import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import TemplateSelector from "../components/TemplateSelector";
import { templates } from "../data/templates";

export default function TemplateSelectScreen({ navigation }) {
  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  const freeTemplateIds = templates
    .filter((template) => template.isFree)
    .map((template) => template.id);

  const [unlockedTemplates, setUnlockedTemplates] = useState(freeTemplateIds);

  const purchaseTemplate = (templateId) => {
    if (unlockedTemplates.includes(templateId)) {
      setSelectedTemplate(templateId);

      navigation.navigate("ResumeBuilder", {
        selectedTemplate: templateId,
      });

      return;
    }

    setUnlockedTemplates([...unlockedTemplates, templateId]);
    setSelectedTemplate(templateId);

    navigation.navigate("ResumeBuilder", {
      selectedTemplate: templateId,
    });
  };

  const useTemplate = (templateId) => {
    setSelectedTemplate(templateId);

    navigation.navigate("ResumeBuilder", {
      selectedTemplate: templateId,
    });
  };

  return (
    <ScrollView style={styles.container}>
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
});