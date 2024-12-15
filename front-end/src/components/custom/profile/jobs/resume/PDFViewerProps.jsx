import React from "react";

function PDFViewer({ url }) {
  return (
    <div className="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden">
      <iframe
        src={`${url}#toolbar=0`}
        className="w-full h-full"
        title="PDF Resume Viewer"
      />
    </div>
  );
}
export default PDFViewer;
