import { View, TextInput, Button, StyleSheet } from "react-native";

export default function CertificationsForm({
  certification,
  setCertification,
  addCertification,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a certification"
        value={certification}
        onChangeText={setCertification}
      />

      <Button title="Add Certification" onPress={addCertification} />
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
});