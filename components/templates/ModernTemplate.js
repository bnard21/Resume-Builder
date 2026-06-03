import { View, Text, Button, StyleSheet } from "react-native";

export default function ModernTemplate({
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
      <View style={styles.header}>
        <Text style={styles.name}>{name || "Your Name"}</Text>

        <Text style={styles.contactLine}>
          {phone || "Phone"} • {email || "your.email@example.com"} •{" "}
          {linkedin || "LinkedIn"} • {location || "Location"}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={summary ? styles.bodyText : styles.emptyText}>
          {summary || "No summary added yet."}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>

        {skills.length === 0 ? (
          <Text style={styles.emptyText}>No skills added yet.</Text>
        ) : (
          <View style={styles.tagContainer}>
            {skills.map((item, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{item}</Text>
                <Button title="Remove" onPress={() => removeSkill(index)} />
              </View>
            ))}
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>

        {experience.length === 0 ? (
          <Text style={styles.emptyText}>No experience added yet.</Text>
        ) : (
          experience.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.role}>{item.role}</Text>
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
              <Text style={styles.bodyText}>• {item}</Text>

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
            <View key={index} style={styles.card}>
              <Text style={styles.role}>{item.name}</Text>
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
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: "#111",
    paddingBottom: 15,
    marginBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  contactLine: {
    fontSize: 12,
    color: "#444",
    lineHeight: 18,
  },
  section: {
    marginTop: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
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
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 13,
  },
  card: {
    marginBottom: 14,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  role: {
    fontSize: 15,
    fontWeight: "bold",
  },
  company: {
    fontSize: 13,
    color: "#444",
  },
  dateText: {
    fontSize: 12,
    color: "#666",
    fontStyle: "italic",
    marginBottom: 4,
  },
  listItem: {
    marginBottom: 8,
  },
});