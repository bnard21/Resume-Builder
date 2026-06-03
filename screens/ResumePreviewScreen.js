import { ScrollView, StyleSheet } from "react-native";

import ResumePreview from "../components/ResumePreview";
import { useResume } from "../context/ResumeContext";

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

  return (
    <ScrollView style={styles.container}>
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