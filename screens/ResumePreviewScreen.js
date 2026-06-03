import { ScrollView, StyleSheet, Button } from "react-native";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
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

  const exportPDF = async () => {
  const html = `
    <html>
      <body style="font-family: Arial; padding: 40px;">
        <h1 style="text-align: center;">${name || "Your Name"}</h1>

        <p style="text-align: center;">
          ${phone || "Phone"} | ${email || "Email"} | ${linkedin || "LinkedIn"} | ${location || "Location"}
        </p>

        <h2>Qualification Summary</h2>
        <p>${summary || ""}</p>

        <h2>Skills</h2>
        <ul>
          ${skills.map((item) => `<li>${item}</li>`).join("")}
        </ul>

        <h2>Professional Experience</h2>
        ${experience
          .map(
            (item) => `
              <div>
                <h3>${item.role}</h3>
                <p><strong>${item.company}</strong> | ${item.dates}</p>
                <p>${item.description}</p>
              </div>
            `
          )
          .join("")}

        <h2>Certifications</h2>
        <ul>
          ${certifications.map((item) => `<li>${item}</li>`).join("")}
        </ul>

        <h2>Education</h2>
        ${education
          .map(
            (item) => `
              <div>
                <h3>${item.name}</h3>
                <p>${item.degree}</p>
                <p>${item.graduationDate}</p>
              </div>
            `
          )
          .join("")}
      </body>
    </html>
  `;

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