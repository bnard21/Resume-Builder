import { View, TextInput, Button, StyleSheet } from "react-native";

export default function ExperienceForm({ job, setJob, addExperience }) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Company"
        value={job.company}
        onChangeText={(text) => setJob({ ...job, company: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Role / Job Title"
        value={job.role}
        onChangeText={(text) => setJob({ ...job, role: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Dates worked"
        value={job.dates}
        onChangeText={(text) => setJob({ ...job, dates: text })}
      />

      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Description"
        value={job.description}
        onChangeText={(text) => setJob({ ...job, description: text })}
        multiline
      />

      <Button title="Add Experience" onPress={addExperience} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: "top",
  },
});