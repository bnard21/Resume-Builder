import { View, TextInput, Button, StyleSheet } from "react-native";

export default function EducationForm({ school, setSchool, addEducation }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="School name"
        value={school.name}
        onChangeText={(text) => setSchool({ ...school, name: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Degree / Program"
        value={school.degree}
        onChangeText={(text) => setSchool({ ...school, degree: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Graduation date"
        value={school.graduationDate}
        onChangeText={(text) =>
          setSchool({ ...school, graduationDate: text })
        }
      />

      <Button title="Add Education" onPress={addEducation} />
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