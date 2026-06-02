import ClassicTemplate from "./templates/ClassicTemplate";

export default function ResumePreview({ selectedTemplate, ...props }) {
  if (selectedTemplate === "classic") {
    return <ClassicTemplate {...props} />;
  }

  return <ClassicTemplate {...props} />;
}