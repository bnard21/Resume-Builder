import { View, Text, Button, StyleSheet } from "react-native";

export default function ResumePreview({
  name,
  email,
  experience,
  removeExperience,
  skills,
  removeSkill,
  education,
  removeEducation,
}) {
  return (
    <View style={styles.resumePreview}>
      <Text style={styles.resumeName}>{name || "Your Name"}</Text>

      <Text style={styles.resumeContact}>
        {email || "your.email@example.com"}
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>

        {skills.length === 0 ? (
          <Text style={styles.emptyText}>No skills added yet.</Text>
        ) : (
          skills.map((item, index) => (
            <View key={index} style={styles.skillItem}>
              <Text style={styles.skillText}>• {item}</Text>

              <Button title="Remove" onPress={() => removeSkill(index)} />
            </View>
          ))
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>

        {education.length === 0 ? (
          <Text style={styles.emptyText}>No education added yet.</Text>
        ) : (
          education.map((item, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.schoolName}>{item.name}</Text>
              <Text style={styles.degree}>{item.degree}</Text>
              <Text style={styles.graduationDate}>
                {item.graduationDate}
              </Text>

              <Button title="Remove" onPress={() => removeEducation(index)} />
            </View>
          ))
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>

        {experience.length === 0 ? (
          <Text style={styles.emptyText}>No experience added yet.</Text>
        ) : (
          experience.map((item, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.jobTitle}>{item.role}</Text>
              <Text style={styles.company}>{item.company}</Text>
              <Text style={styles.dates}>{item.dates}</Text>
              <Text style={styles.description}>{item.description}</Text>

              <Button
                title="Remove"
                onPress={() => removeExperience(index)}
              />
            </View>
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resumePreview: {
    marginTop: 30,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  resumeName: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  resumeContact: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 20,
  },
  section: {
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    paddingBottom: 5,
    marginBottom: 10,
  },
  emptyText: {
    color: "#777",
    fontStyle: "italic",
  },

  skillItem: {
    marginBottom: 8,
  },
  skillText: {
    fontSize: 14,
  },

  educationItem: {
    marginBottom: 15,
  },
  schoolName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  degree: {
    fontSize: 15,
  },
  graduationDate: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 5,
  },

  experienceItem: {
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  company: {
    fontSize: 15,
  },
  dates: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});