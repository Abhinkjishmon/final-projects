import React from "react";
import { ArrowLeft, Mail, Phone, Calendar, Briefcase } from "lucide-react";
// import { StatusBadge } from "./status/StatusBadge";
import { ResumeViewer } from "@/components/custom";
import { getStatusColor } from "@/utils/jobs";

function ApplicationDetail({ application, onBack }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Applications
      </button>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {application.applicantName}
          </h2>
          <p className="text-xl text-gray-600">{application.position}</p>
        </div>
        {/* <StatusBadge status={application.status} size="md" /> */}
        {application.status && (
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
              application.status
            )}`}
          >
            {application.status.charAt(0).toUpperCase() +
              application.status.slice(1)}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="flex items-center">
          <Mail className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-gray-900">{application.email}</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-gray-900">{application.phone}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-gray-900">
            Applied: {application.appliedDate}
          </span>
        </div>
        <div className="flex items-center">
          <Briefcase className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-gray-900">
            {application.experience} years experience
          </span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Cover Letter</h3>
        <p className="text-gray-700 whitespace-pre-line">
          {application.coverLetter}
        </p>
      </div>

      <ResumeViewer application={application} />
    </div>
  );
}

export default ApplicationDetail;
