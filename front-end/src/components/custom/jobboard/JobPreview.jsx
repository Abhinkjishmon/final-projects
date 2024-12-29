import React from "react";
import {
  Calendar,
  Briefcase,
  MapPin,
  Clock,
  Tags,
  GraduationCap,
  FileText,
} from "lucide-react";

function JobPreview({ job, onBack, onPostjob }) {
  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Edit
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
            <div className="mt-2 flex items-center text-gray-600">
              <Briefcase className="w-4 h-4 mr-2" />
              <span>{job.company}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {job.employmentType}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Experience: {job.experienceRequired} years
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Closing Date: {new Date(job.closingDate).toLocaleDateString()}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Description
            </h2>
            <p className="text-gray-600">{job.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              <Tags className="inline-block w-5 h-5 mr-2" />
              Required Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {job.skills.filter(Boolean).map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              <GraduationCap className="inline-block w-5 h-5 mr-2" />
              Qualifications
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {job.qualifications
                .filter(Boolean)
                .map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              <FileText className="inline-block w-5 h-5 mr-2" />
              Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {job.responsibilities
                .filter(Boolean)
                .map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            onClick={onPostjob}
          >
            Post Job
          </button>
        </div>
      </div>
    </>
  );
}

export default JobPreview;
