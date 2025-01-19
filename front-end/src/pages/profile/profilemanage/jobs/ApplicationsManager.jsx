import React, { useEffect, useState } from "react";
import {
  Users,
  Briefcase,
  Calendar,
  Mail,
  Phone,
  MapPin,
  X,
  Download,
  GraduationCap as GraduateCap,
  Building,
  FileText,
} from "lucide-react";
import {
  changeApplicationStatus,
  getApplicationsOfaJob,
} from "@/apiService.js/profile.service";
import { useParams } from "react-router-dom";
import { formatDate } from "@/utils/date";
import { toast } from "react-toastify";

function ApplicationCard({ application, isSelected, onClick, onStatusChange }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow cursor-pointer ${
        isSelected ? "ring-2 ring-blue-500" : ""
      }`}
      onClick={onClick}
    >
      {isSelected ? (
        <div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {application.candidateName}
              </h3>
              <p className="text-gray-600">
                {application.experience || "N/A"} years of experience
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => onStatusChange(e.target.value)}
              >
                <option value="">Set Status</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Interviewed">Interviewed</option>
                <option value="Rejected">Rejected</option>
                <option value="Selected">Selected</option>
              </select>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Contact Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{application.userId.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{application?.candidatePhone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{application?.location || "N/A"}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    Applied on {formatDate(application?.applicationDate)}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Professional Background
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <GraduateCap className="w-4 h-4 mr-2" />
                  {application?.skills?.map((skill) => {
                    return <span>{skill || "N/A"}</span>;
                  })}
                </div>
                <div className="flex items-center text-gray-600">
                  <Building className="w-4 h-4 mr-2" />
                  <span>{application.userId.company || "N/A"}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>{application.userId.role || "N/A"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-4">Cover Letter</h4>
            <div className="bg-gray-50 p-4 rounded-md text-gray-700 whitespace-pre-wrap">
              {application.coverLetter || "No cover letter provided."}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                if (application?.resume) {
                  const link = document.createElement("a");
                  link.href = application?.resume;
                  link.download = `${application?.resume}_Resume.pdf`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                } else {
                  alert("Resume not available for this application.");
                }
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Application
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {application?.candidateName}
            </h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center text-gray-600">
                <Briefcase className="w-4 h-4 mr-2" />
                <span>{application?.candidateEmail || "N/A"}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{application?.location || "N/A"}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FileText className="w-4 h-4 mr-2" />
                <span>
                  Applied on {formatDate(application?.applicationDate)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ApplicationsManager() {
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);
  const [applicationStatuses, setApplicationStatuses] = useState({});
  const [applications, setApplications] = useState([]);
  const [jobDetails, setJobDetails] = useState({});
  const { jobId } = useParams();

  useEffect(() => {
    const getApplicationsForAJob = async () => {
      try {
        const response = await getApplicationsOfaJob(jobId);
        setApplications(response.applications);
        setJobDetails(response.applications[0]?.jobId || {});
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };
    getApplicationsForAJob();
  }, [jobId]);

  const handleStatusChange = async (applicationId, status) => {
    setApplicationStatuses((prev) => ({
      ...prev,
      [applicationId]: status,
    }));
    const response = await changeApplicationStatus(applicationId, { status });
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      closeDialog();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {jobDetails.title || "Job Title"}
              </h1>
              <div className="flex items-center mt-2 text-gray-600">
                <Briefcase className="w-4 h-4 mr-2" />
                <span>{jobDetails.employmentType || "N/A"}</span>
                <span className="mx-2">•</span>
                <MapPin className="w-4 h-4 mr-2" />
                <span>{jobDetails.location || "N/A"}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-gray-600 mr-2" />
                <span className="text-2xl font-semibold text-gray-900">
                  {applications.length}
                </span>
              </div>
              <p className="text-sm text-gray-600">Total Applications</p>
            </div>
          </div>
        </div>
        <div>
          {applications.map((application) => (
            <ApplicationCard
              key={application._id}
              application={application}
              isSelected={selectedApplicationId === application._id}
              onClick={() =>
                setSelectedApplicationId(
                  selectedApplicationId === application._id
                    ? null
                    : application._id
                )
              }
              onStatusChange={(status) =>
                handleStatusChange(application._id, status)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApplicationsManager;
