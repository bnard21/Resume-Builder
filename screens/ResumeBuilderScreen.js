import { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

import PersonalInfoForm from "../components/PersonalInfoForm";
import ExperienceForm from "../components/ExperienceForm";
import SkillsForm from "../components/SkillsForm";
import EducationForm from "../components/EducationForm";
import SummaryForm from "../components/SummaryForm";
import CertificationsForm from "../components/CertificationsForm";
import ResumePreview from "../components/ResumePreview";

export default function ResumeBuilderScreen({ route }) {
  const selectedTemplate = route.params?.selectedTemplate || "classic";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");

  const [job, setJob] = useState({
    company: "",
    role: "",
    dates: "",
    description: "",
  });

  const [experience, setExperience] = useState([]);

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const [certification, setCertification] = useState("");
  const [certifications, setCertifications] = useState([]);

  const [school, setSchool] = useState({
    name: "",
    degree: "",
    graduationDate: "",
  });

  const [education, setEducation] = useState([]);

  const addExperience = () => {
    if (job.company.trim() === "" || job.role.trim() === "") return;

    setExperience([...experience, job]);

    setJob({
      company: "",
      role: "",
      dates: "",
      description: "",
    });
  };

  const removeExperience = (indexToRemove) => {
    const updatedExperience = experience.filter((item, index) => {
      return index !== indexToRemove;
    });

    setExperience(updatedExperience);
  };

  const addSkill = () => {
    if (skill.trim() === "") return;

    setSkills([...skills, skill]);
    setSkill("");
  };

  const removeSkill = (indexToRemove) => {
    const updatedSkills = skills.filter((item, index) => {
      return index !== indexToRemove;
    });

    setSkills(updatedSkills);
  };

  const addCertification = () => {
    if (certification.trim() === "") return;

    setCertifications([...certifications, certification]);
    setCertification("");
  };

  const removeCertification = (indexToRemove) => {
    const updatedCertifications = certifications.filter((item, index) => {
      return index !== indexToRemove;
    });

    setCertifications(updatedCertifications);
  };

  const addEducation = () => {
    if (school.name.trim() === "" || school.degree.trim() === "") return;

    setEducation([...education, school]);

    setSchool({
      name: "",
      degree: "",
      graduationDate: "",
    });
  };

  const removeEducation = (indexToRemove) => {
    const updatedEducation = education.filter((item, index) => {
      return index !== indexToRemove;
    });

    setEducation(updatedEducation);
  };

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

      <Text style={styles.sectionHeader}>Resume Preview</Text>
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