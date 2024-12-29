import React, { useState } from "react";
import {
  Calendar,
  Briefcase,
  MapPin,
  Clock,
  Tags,
  GraduationCap,
  FileText,
  Target,
} from "lucide-react";

function JobForm({ onPreview }) {
  const categories = [
    "Design",
    "Sales",
    "Marketing",
    "Finance",
    "Technology",
    "Engineering",
    "Business",
    "Human Resource",
  ];
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    employmentType: "Full-time",
    skills: [""],
    qualifications: [""],
    responsibilities: [""],
    experienceRequired: 0,
    category: "",
    closingDate: "",
    salary:""
  });

  const handleArrayInput = (field, index, value) => {
    setJobData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayItem = (field) => {
    setJobData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPreview(jobData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Create Job Posting
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Briefcase className="inline-block w-4 h-4 mr-2" />
            Job Title
          </label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={jobData.title}
            onChange={(e) =>
              setJobData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <FileText className="inline-block w-4 h-4 mr-2" />
            Description
          </label>
          <textarea
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={4}
            value={jobData.description}
            onChange={(e) =>
              setJobData((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Briefcase className="inline-block w-4 h-4 mr-2" />
              Company
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={jobData.company}
              onChange={(e) =>
                setJobData((prev) => ({ ...prev, company: e.target.value }))
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <MapPin className="inline-block w-4 h-4 mr-2" />
              Location
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={jobData.location}
              onChange={(e) =>
                setJobData((prev) => ({ ...prev, location: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Briefcase className="inline-block w-4 h-4 mr-2" />
              Salary
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={jobData?.salary}
              onChange={(e) =>
                setJobData((prev) => ({ ...prev, salary: e.target.value }))
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <MapPin className="inline-block w-4 h-4 mr-2" />
              Location
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={jobData.location}
              
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Clock className="inline-block w-4 h-4 mr-2" />
              Employment Type
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={jobData.employmentType}
              onChange={(e) =>
                setJobData((prev) => ({
                  ...prev,
                  employmentType: e.target.value,
                }))
              }
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Target className="inline-block w-4 h-4 mr-2" />
              Category
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={jobData.category}
              onChange={(e) =>
                setJobData((prev) => ({ ...prev, category: e.target.value }))
              }
            >
              {categories.map((categorie) => {
                return <option value={categorie}>{categorie}</option>;
              })}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Tags className="inline-block w-4 h-4 mr-2" />
            Skills
          </label>
          {jobData.skills.map((skill, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                required
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                value={skill}
                onChange={(e) =>
                  handleArrayInput("skills", index, e.target.value)
                }
              />
              {index === jobData.skills.length - 1 && (
                <button
                  type="button"
                  onClick={() => addArrayItem("skills")}
                  className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <GraduationCap className="inline-block w-4 h-4 mr-2" />
            Qualifications
          </label>
          {jobData.qualifications.map((qualification, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                value={qualification}
                onChange={(e) =>
                  handleArrayInput("qualifications", index, e.target.value)
                }
              />
              {index === jobData.qualifications.length - 1 && (
                <button
                  type="button"
                  onClick={() => addArrayItem("qualifications")}
                  className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <FileText className="inline-block w-4 h-4 mr-2" />
            Responsibilities
          </label>
          {jobData.responsibilities.map((responsibility, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                value={responsibility}
                onChange={(e) =>
                  handleArrayInput("responsibilities", index, e.target.value)
                }
              />
              {index === jobData.responsibilities.length - 1 && (
                <button
                  type="button"
                  onClick={() => addArrayItem("responsibilities")}
                  className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="inline-block w-4 h-4 mr-2" />
              Experience Required (years)
            </label>
            <input
              type="number"
              required
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={jobData.experienceRequired}
              onChange={(e) =>
                setJobData((prev) => ({
                  ...prev,
                  experienceRequired: parseInt(e.target.value),
                }))
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="inline-block w-4 h-4 mr-2" />
              Closing Date
            </label>
            <input
              type="date"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={jobData.closingDate}
              onChange={(e) =>
                setJobData((prev) => ({ ...prev, closingDate: e.target.value }))
              }
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Preview Job
      </button>
    </form>
  );
}
export default JobForm;
