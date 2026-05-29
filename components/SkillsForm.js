import { View, TextInput, Button, StyleSheet } from "react-native";

export default function SkillsForm({ skill, setSkill, addSkill }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a skill"
        value={skill}
        onChangeText={setSkill}
      />

      <Button title="Add Skill" onPress={addSkill} />
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