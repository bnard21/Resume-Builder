import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";

export default function ResumePreview({ selectedTemplate, ...props }) {
  if (selectedTemplate === "classic") {
    return <ClassicTemplate {...props} />;
  }

  if (selectedTemplate === "modern") {
    return <ModernTemplate {...props} />;
  }

  return <ClassicTemplate {...props} />;
}