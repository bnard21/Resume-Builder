import { View, Text, Button, StyleSheet } from "react-native";

export default function TemplateSelector({
  selectedTemplate,
  setSelectedTemplate,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choose a Resume Template</Text>

      <View style={styles.templateCard}>
        <Text style={styles.templateName}>Classic Professional</Text>
        <Text style={styles.templateDescription}>
          Clean, simple, ATS-friendly resume layout.
        </Text>

        <Button
          title={
            selectedTemplate === "classic"
              ? "Selected"
              : "Select Classic Template"
          }
          onPress={() => setSelectedTemplate("classic")}
        />
      </View>
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
  },
  templateName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  templateDescription: {
    fontSize: 13,
    color: "#555",
    marginBottom: 10,
  },
});