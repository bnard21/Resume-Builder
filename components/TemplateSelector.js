import { View, Text, Button, StyleSheet, Alert } from "react-native";

export default function TemplateSelector({
  templates,
  selectedTemplate,
  setSelectedTemplate,
  unlockedTemplates,
  purchaseTemplate,
}) {
  const formatPrice = (template) => {
    if (template.isFree || template.price === 0) {
      return "Free";
    }

    return `$${template.price.toFixed(2)}`;
  };

  const confirmPurchase = (template) => {
    Alert.alert(
      "Unlock Template",
      `Unlock ${template.name} for ${formatPrice(template)}? This is a lifetime unlock.`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm Purchase",
          onPress: () => purchaseTemplate(template.id),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choose a Resume Template</Text>

      {templates.map((template) => {
        const isUnlocked =
          template.isFree ||
          template.price === 0 ||
          unlockedTemplates.includes(template.id);

        return (
          <View key={template.id} style={styles.templateCard}>
            <Text style={styles.templateName}>{template.name}</Text>

            <Text style={styles.templateStatus}>
              {isUnlocked
                ? "Unlocked"
                : `Locked - ${formatPrice(template)} Lifetime Unlock`}
            </Text>

            <Text style={styles.templateDescription}>
              {template.description}
            </Text>

            {isUnlocked ? (
              <Button
                title={`Use ${template.name}`}
                onPress={() => setSelectedTemplate(template.id)}
              />
            ) : (
              <Button
                title={`Buy ${template.name} - ${formatPrice(template)}`}
                onPress={() => confirmPurchase(template)}
              />
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  templateCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 12,
  },
  templateName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  templateStatus: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 6,
  },
  templateDescription: {
    fontSize: 13,
    color: "#555",
    marginBottom: 10,
  },
});