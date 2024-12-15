import React from "react";
import { FileText, Calendar, Clock } from "lucide-react";
import { getStatusColor } from "@/utils/jobs";

function ApplicationList({ applications, onSelectApplication }) {
  return (
    <div className="space-y-4">
      {applications.map((application) => (
        <div
          key={application.id}
          onClick={() => onSelectApplication(application)}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {application.applicantName}
              </h3>
              <p className="text-gray-600">{application.position}</p>
            </div>

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

          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{application.appliedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{application.experience} years experience</span>
            </div>
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              <span>{application.resumeType.toUpperCase()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApplicationList;
