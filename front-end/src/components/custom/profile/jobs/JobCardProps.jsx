import React from "react";
import { Calendar, MapPin, Building2, Trash2 } from "lucide-react";
import { formatDate, getRelativeTime } from "@/utils/date";
import { getStatusColor } from "@/utils/jobs";
import { Link, useParams } from "react-router-dom";

function JobCardProps({ job, type, onAction }) {
  const jobDetails = type === "created" ? job : job?.jobId;
  const { id } = useParams();

  if (!jobDetails) return null;

  return (
    <Link to={`/find-job/about-job/${jobDetails?._id}`}>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {jobDetails?.title || "Untitled Job"}
            </h3>
            <div className="mt-1 flex items-center space-x-2 text-gray-500">
              <Building2 className="h-4 w-4" />
              <span>{jobDetails?.company || "Unknown Company"}</span>
            </div>
            <div className="mt-1 flex items-center space-x-2 text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>{jobDetails?.location || "Location not specified"}</span>
            </div>
            <div className="mt-1 flex items-center space-x-2 text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>
                {jobDetails?.postedDate
                  ? formatDate(jobDetails?.postedDate)
                  : "Date not available"}
              </span>
            </div>
          </div>
          {job?.status && (
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                job?.status
              )}`}
            >
              {job?.status.charAt(0).toUpperCase() + job?.status.slice(1)}
            </span>
          )}
        </div>
        {type === "created" && (
          <div className="mt-4 flex space-x-3">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAction?.("view", job._id);
              }}
              className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View Details
            </button>
            <Link to={`/profile/${id}/jobs/applications/${jobDetails._id}`}>
              <button
                onClick={() => onAction?.("applications", job._id)}
                className="inline-flex items-center px-3 py-1.5 border border-blue-500 text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
              >
                View Applications
              </button>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAction?.("delete", job._id);
              }}
              className="inline-flex items-center px-3 py-1.5 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50"
            >
              Delete
            </button>
          </div>
        )}

        {type === "wishlist" && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => onAction?.("remove", job._id)}
              className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Remove from Wishlist
            </button>
          </div>
        )}
      </div>
    </Link>
  );
}

export default JobCardProps;
