import React from "react";
import PDFViewer from "./PDFViewerProps";
import ImageViewer from "./ImageViewerProps";
import DocViewer from "./DocViewerProps";

function ResumeViewer({ application }) {
  const { resumeType, resumeUrl } = application;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Resume</h3>
      {resumeType === "pdf" && <PDFViewer url={resumeUrl} />}
      {resumeType === "image" && <ImageViewer url={resumeUrl} />}
      {resumeType === "doc" && <DocViewer url={resumeUrl} />}
    </div>
  );
}

export default ResumeViewer;
