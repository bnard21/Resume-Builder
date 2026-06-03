import { Text, StyleSheet, ScrollView, Button } from "react-native";

import PersonalInfoForm from "../components/PersonalInfoForm";
import ExperienceForm from "../components/ExperienceForm";
import SkillsForm from "../components/SkillsForm";
import EducationForm from "../components/EducationForm";
import SummaryForm from "../components/SummaryForm";
import CertificationsForm from "../components/CertificationsForm";

import { useResume } from "../context/ResumeContext";

export default function ResumeBuilderScreen({ route, navigation }) {
  // Use the selected template, otherwise use classic.
  const selectedTemplate = route.params?.selectedTemplate || "classic";

  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    linkedin,
    setLinkedin,
    location,
    setLocation,
    summary,
    setSummary,

    job,
    setJob,
    experience,
    addExperience,
    removeExperience,

    skill,
    setSkill,
    skills,
    addSkill,
    removeSkill,

    certification,
    setCertification,
    certifications,
    addCertification,
    removeCertification,

    school,
    setSchool,
    education,
    addEducation,
    removeEducation,
  } = useResume();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Resume Builder</Text>

      <Text style={styles.sectionHeader}>Personal Information</Text>
      <PersonalInfoForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        linkedin={linkedin}
        setLinkedin={setLinkedin}
        location={location}
        setLocation={setLocation}
      />

      <Text style={styles.sectionHeader}>Qualification Summary</Text>
      <SummaryForm summary={summary} setSummary={setSummary} />

      <Text style={styles.sectionHeader}>Work Experience</Text>
      <ExperienceForm
        job={job}
        setJob={setJob}
        addExperience={addExperience}
      />

      <Text style={styles.sectionHeader}>Skills</Text>
      <SkillsForm skill={skill} setSkill={setSkill} addSkill={addSkill} />

      <Text style={styles.sectionHeader}>Certifications</Text>
      <CertificationsForm
        certification={certification}
        setCertification={setCertification}
        addCertification={addCertification}
      />

      <Text style={styles.sectionHeader}>Education</Text>
      <EducationForm
        school={school}
        setSchool={setSchool}
        addEducation={addEducation}
      />

      <Button
        title="Preview Resume"
        onPress={() =>
          navigation.navigate("ResumePreview", {
            selectedTemplate,
          })
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },
});