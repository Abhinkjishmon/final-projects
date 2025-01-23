import React, { useRef, useState } from "react";
import {
  X,
  Calendar,
  Clock,
  Award,
  CheckCircle,
  Paperclip,
} from "lucide-react";
import { submitAssignments } from "@/apiService.js/acadamic.service";
import { toast } from "react-toastify";
import { Spinner } from "../..";

export function AssignmentDetails({ assignment, onClose }) {
  console.log(assignment?._id);
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile?.type !== "application/pdf") {
      alert("Please upload a valid PDF file.");
      return;
    }
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("assignmentId", assignment?._id);
    setLoader(true);
    const response = await submitAssignments(formData);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
      setLoader(false);
    } else {
      toast.success(response.message);
      setLoader(false);
      onSubmit();
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {assignment.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>
                Due: {new Date(assignment.dueDate).toLocaleDateString()}
              </span>
            </div>
            {assignment.submissionDate && (
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>
                  Submitted
                  {new Date(assignment.submissionDate).toLocaleDateString()}
                </span>
              </div>
            )}
            {assignment.grade && (
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5" />
                <span>
                  Grade: {assignment.grade}/{assignment.points}
                </span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{assignment.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Instructions</h3>
            <p className="text-gray-700 whitespace-pre-line">
              {assignment.instructions}
            </p>
          </div>
          <div className="w-full  mx-auto">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="file"
              >
                Upload Assignment (PDF only)
              </label>
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                accept="application/pdf"
                className="block w-full border border-gray-300 rounded-lg py-2 px-4"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              disabled={!file}
            >
              {loader ? <Spinner /> : "Submit Assignment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentDetails;
