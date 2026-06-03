import { View, Text, StyleSheet } from "react-native";

export default function TemplateCardPreview({ templateId }) {
  if (templateId === "modern") {
    return (
      <View style={styles.previewBox}>
        <View style={styles.modernHeader}>
          <View style={styles.longLine} />
          <View style={styles.shortLine} />
        </View>

        <Text style={styles.previewSectionTitle}>Profile</Text>
        <View style={styles.line} />
        <View style={styles.line} />

        <Text style={styles.previewSectionTitle}>Skills</Text>
        <View style={styles.tagRow}>
          <View style={styles.tag} />
          <View style={styles.tag} />
          <View style={styles.tag} />
        </View>

        <Text style={styles.previewSectionTitle}>Experience</Text>
        <View style={styles.cardLine} />
        <View style={styles.cardLineShort} />
      </View>
    );
  }

  return (
    <View style={styles.previewBox}>
      <View style={styles.centerLine} />
      <View style={styles.centerShortLine} />

      <View style={styles.divider} />

      <Text style={styles.previewSectionTitle}>Skills</Text>
      <View style={styles.line} />

      <Text style={styles.previewSectionTitle}>Summary</Text>
      <View style={styles.line} />
      <View style={styles.line} />

      <Text style={styles.previewSectionTitle}>Experience</Text>
      <View style={styles.line} />
      <View style={styles.shortLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  previewBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fafafa",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  modernHeader: {
    borderBottomWidth: 2,
    borderBottomColor: "#111",
    paddingBottom: 8,
    marginBottom: 8,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#111",
    marginVertical: 8,
  },
  previewSectionTitle: {
    fontSize: 9,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 3,
    textTransform: "uppercase",
  },
  line: {
    height: 5,
    backgroundColor: "#ddd",
    borderRadius: 3,
    marginBottom: 4,
  },
  longLine: {
    height: 7,
    width: "70%",
    backgroundColor: "#ccc",
    borderRadius: 3,
    marginBottom: 5,
  },
  shortLine: {
    height: 5,
    width: "45%",
    backgroundColor: "#ddd",
    borderRadius: 3,
    marginBottom: 4,
  },
  centerLine: {
    height: 7,
    width: "60%",
    backgroundColor: "#ccc",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 5,
  },
  centerShortLine: {
    height: 5,
    width: "75%",
    backgroundColor: "#ddd",
    borderRadius: 3,
    alignSelf: "center",
  },
  tagRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 4,
  },
  tag: {
    height: 12,
    width: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  cardLine: {
    height: 6,
    width: "80%",
    backgroundColor: "#ddd",
    borderRadius: 3,
    marginBottom: 4,
  },
  cardLineShort: {
    height: 6,
    width: "55%",
    backgroundColor: "#ddd",
    borderRadius: 3,
  },
});