import { View, Text, Button, StyleSheet } from "react-native";

export default function ClassicTemplate({
  name,
  email,
  phone,
  linkedin,
  location,
  summary,
  experience,
  removeExperience,
  skills,
  removeSkill,
  certifications,
  removeCertification,
  education,
  removeEducation,
}) {
  return (
    <View style={styles.resumePage}>
      <Text style={styles.name}>{name || "Your Name"}</Text>

      <Text style={styles.contactLine}>
        {phone || "Phone"} | {email || "your.email@example.com"} |{" "}
        {linkedin || "LinkedIn"} | {location || "Location"}
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>

        {skills.length === 0 ? (
          <Text style={styles.emptyText}>No skills added yet.</Text>
        ) : (
          skills.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bulletText}>• {item}</Text>

              <Button title="Remove" onPress={() => removeSkill(index)} />
            </View>
          ))
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Qualification Summary</Text>

        <Text style={summary ? styles.bodyText : styles.emptyText}>
          {summary || "No summary added yet."}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>

        {experience.length === 0 ? (
          <Text style={styles.emptyText}>No experience added yet.</Text>
        ) : (
          experience.map((item, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.jobTitle}>{item.role}</Text>
              <Text style={styles.company}>{item.company}</Text>
              <Text style={styles.dateText}>{item.dates}</Text>
              <Text style={styles.bodyText}>{item.description}</Text>

              <Button title="Remove" onPress={() => removeExperience(index)} />
            </View>
          ))
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>

        {certifications.length === 0 ? (
          <Text style={styles.emptyText}>No certifications added yet.</Text>
        ) : (
          certifications.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bulletText}>• {item}</Text>

              <Button
                title="Remove"
                onPress={() => removeCertification(index)}
              />
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
              <Text style={styles.bodyText}>{item.degree}</Text>
              <Text style={styles.dateText}>{item.graduationDate}</Text>

              <Button title="Remove" onPress={() => removeEducation(index)} />
            </View>
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resumePage: {
    marginTop: 30,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  contactLine: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 3,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  bodyText: {
    fontSize: 13,
    lineHeight: 19,
  },
  emptyText: {
    fontSize: 13,
    color: "#777",
    fontStyle: "italic",
  },
  listItem: {
    marginBottom: 6,
  },
  bulletText: {
    fontSize: 13,
    lineHeight: 18,
  },
  experienceItem: {
    marginBottom: 14,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  company: {
    fontSize: 13,
    fontWeight: "600",
  },
  dateText: {
    fontSize: 12,
    fontStyle: "italic",
    marginBottom: 4,
  },
  educationItem: {
    marginBottom: 12,
  },
  schoolName: {
    fontSize: 14,
    fontWeight: "bold",
  },
});