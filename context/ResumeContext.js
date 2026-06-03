import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ResumeContext = createContext();

const RESUME_STORAGE_KEY = "resumeData";

export function ResumeProvider({ children }) {
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

  const loadResumeData = async () => {
    try {
      const savedData = await AsyncStorage.getItem(RESUME_STORAGE_KEY);

      if (savedData) {
        const parsedData = JSON.parse(savedData);

        setName(parsedData.name || "");
        setEmail(parsedData.email || "");
        setPhone(parsedData.phone || "");
        setLinkedin(parsedData.linkedin || "");
        setLocation(parsedData.location || "");
        setSummary(parsedData.summary || "");

        setExperience(parsedData.experience || []);
        setSkills(parsedData.skills || []);
        setCertifications(parsedData.certifications || []);
        setEducation(parsedData.education || []);
      }
    } catch (error) {
      console.log("Error loading resume data:", error);
    }
  };

  const saveResumeData = async () => {
    try {
      const resumeDataToSave = {
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

      await AsyncStorage.setItem(
        RESUME_STORAGE_KEY,
        JSON.stringify(resumeDataToSave)
      );
    } catch (error) {
      console.log("Error saving resume data:", error);
    }
  };

  useEffect(() => {
    loadResumeData();
  }, []);

  useEffect(() => {
    saveResumeData();
  }, [
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
  ]);

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

  const resumeData = {
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
  };

  return (
    <ResumeContext.Provider value={resumeData}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}