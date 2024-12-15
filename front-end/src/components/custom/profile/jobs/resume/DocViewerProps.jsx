import React from "react";
import { FileText } from "lucide-react";

function DocViewer({ url }) {
  return (
    <div className="w-full p-8 border border-gray-200 rounded-lg bg-gray-50 flex flex-col items-center justify-center">
      <FileText className="w-16 h-16 text-gray-400 mb-4" />
      <p className="text-gray-600 mb-4">This is a Microsoft Word document</p>
      <a
        href={url}
        download
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Download Document
      </a>
    </div>
  );
}

export default DocViewer;
