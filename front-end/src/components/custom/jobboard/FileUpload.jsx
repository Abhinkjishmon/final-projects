import React, { useEffect, useState } from "react";
import { Upload } from "lucide-react";

function FileUpload({ value, onChange }) {
  // const [value, setValue] = useState();
  const [resume, setResume] = useState();
  const handleFileChange = (e) => {
    const render = new FileReader();
    const file = e.target.files?.[0] || null;
    // setValue(file.name);
    if (file) {
      render.onload = () => {
        setResume(render.result);
        onChange(resume);
        console.log(resume)
      };
      render.readAsDataURL(file);
    }
  };
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
        <Upload size={18} />
        Resume *
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-400 transition-colors">
        <div className="space-y-1 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="resume-upload"
              className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            >
              <span>Upload a file</span>
              <input
                id="resume-upload"
                name="resume-upload"
                type="file"
                className="sr-only"
                required
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
          {value && (
            <p className="text-sm text-gray-600">Selected: {value.name}</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default FileUpload;
