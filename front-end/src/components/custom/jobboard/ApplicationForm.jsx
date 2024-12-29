import React, { useState } from "react";
import {
  Upload,
  Phone,
  Mail,
  User,
  FileText,
  Briefcase,
  Code,
} from "lucide-react";
import SkillsInput from "./SkillsInput";
import FileUpload from "./FileUpload";
import { useSelector } from "react-redux";
import { jobApplication } from "@/apiService.js/job.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ApplicationForm({ jobId,onFormSubmit }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    candidateName: "",
    candidateEmail: "",
    candidatePhone: "",
    resume: null,
    coverLetter: "",
    skills: [],
    experience: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataInstance = new FormData();
    formDataInstance.append("candidateName", formData.candidateName);
    formDataInstance.append("candidateEmail", formData.candidateEmail);
    formDataInstance.append("candidatePhone", formData.candidatePhone);
    if (formData.resume) {
      formDataInstance.append("resume", formData.resume);
    }
    formDataInstance.append("coverLetter", formData.coverLetter);
    formDataInstance.append("skills", JSON.stringify(formData.skills));

    formDataInstance.append("experience", formData.experience);
    const response = await jobApplication(jobId, formDataInstance);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      onFormSubmit();
    }
  };

  const handleSkillsChange = (newSkills) => {
    setFormData((prev) => ({ ...prev, skills: newSkills }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl scroll-bar h-[80vh] overflow-scroll mx-auto p-6 space-y-6"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Job Application</h1>
        <p className="text-gray-600 mt-2">
          Fill out the form below to submit your application
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <User size={18} />
            Full Name *
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.candidateName}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                candidateName: e.target.value,
              }))
            }
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Mail size={18} />
            Email Address *
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.candidateEmail}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                candidateEmail: e.target.value,
              }))
            }
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Phone size={18} />
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.candidatePhone}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                candidatePhone: e.target.value,
              }))
            }
          />
        </div>

        <FileUpload
          value={formData.resume}
          onChange={(file) =>
            setFormData((prev) => ({ ...prev, resume: file }))
          }
        />

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <FileText size={18} />
            Cover Letter
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
            value={formData.coverLetter}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, coverLetter: e.target.value }))
            }
            placeholder="Write your cover letter here..."
          />
        </div>

        <SkillsInput skills={formData.skills} onChange={handleSkillsChange} />

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Briefcase size={18} />
            Years of Experience
          </label>
          <input
            type="number"
            min="0"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.experience}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                experience: parseInt(e.target.value) || 0,
              }))
            }
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Submit Application
      </button>
    </form>
  );
}
export default ApplicationForm;
