import { ScrollView, StyleSheet, Button } from "react-native";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

import ResumePreview from "../components/ResumePreview";
import { useResume } from "../context/ResumeContext";
import { generateResumeHtml } from "../utils/resumePdfTemplates";

export default function ResumePreviewScreen({ route }) {
  const selectedTemplate = route.params?.selectedTemplate || "classic";

  const {
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
  } = useResume();

  const exportPDF = async () => {
    const resumeData = {
      name,
      email,
      phone,
      linkedin,
      location,
      summary,
      experience,
      skills,
      certifications,
      education,
    };

    const html = generateResumeHtml(selectedTemplate, resumeData);

    const { uri } = await Print.printToFileAsync({ html });

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Button title="Export PDF" onPress={exportPDF} />

      <ResumePreview
        selectedTemplate={selectedTemplate}
        name={name}
        email={email}
        phone={phone}
        linkedin={linkedin}
        location={location}
        summary={summary}
        experience={experience}
        removeExperience={removeExperience}
        skills={skills}
        removeSkill={removeSkill}
        certifications={certifications}
        removeCertification={removeCertification}
        education={education}
        removeEducation={removeEducation}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
});