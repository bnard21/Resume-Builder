import { View, TextInput, StyleSheet } from "react-native";

export default function SummaryForm({ summary, setSummary }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, styles.summaryInput]}
        placeholder="Enter your qualification summary"
        value={summary}
        onChangeText={setSummary}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  summaryInput: {
    height: 120,
    textAlignVertical: "top",
  },
});