import { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

import PersonalInfoForm from "./components/PersonalInfoForm";
import ExperienceForm from "./components/ExperienceForm";
import SkillsForm from "./components/SkillsForm";
import EducationForm from "./components/EducationForm";
import ResumePreview from "./components/ResumePreview";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [job, setJob] = useState({
    company: "",
    role: "",
    dates: "",
    description: "",
  });

  const [experience, setExperience] = useState([]);

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

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

      <PersonalInfoForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      />

      <ExperienceForm
        job={job}
        setJob={setJob}
        addExperience={addExperience}
      />

      <SkillsForm
        skill={skill}
        setSkill={setSkill}
        addSkill={addSkill}
      />
      <EducationForm
        school={school}
        setSchool={setSchool}
        addEducation={addEducation}
      />

      <ResumePreview
        name={name}
        email={email}
        experience={experience}
        removeExperience={removeExperience}
        skills={skills}
        removeSkill={removeSkill}
        education={education}
        removeEducation={removeEducation}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});