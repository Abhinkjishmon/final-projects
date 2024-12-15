import React from "react";

import {
  Calendar,
  MapPin,
  Building2,
  BadgeCheck,
  Clock,
  Trash2,
} from "lucide-react";
import { getRelativeTime } from "@/utils/date";
import { getStatusColor } from "@/utils/jobs";
import { Link } from "react-router-dom";

function JobCardProps({ job, type, onAction }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <div className="mt-1 flex items-center space-x-2 text-gray-500">
            <Building2 className="h-4 w-4" />
            <span>{job.company}</span>
          </div>
          <div className="mt-1 flex items-center space-x-2 text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="mt-1 flex items-center space-x-2 text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{getRelativeTime(job.postedDate)}</span>
          </div>
        </div>

        {job.status && (
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
              job.status
            )}`}
          >
            {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
          </span>
        )}
      </div>

      {type === "created" && (
        <div className="mt-4 flex space-x-3">
          <button
            onClick={() => onAction?.("view", job.id)}
            className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View Details
          </button>
          <Link to={"/profile/jobs/applications"}>
            <button
              onClick={() => onAction?.("applications", job.id)}
              className="inline-flex items-center px-3 py-1.5 border border-blue-500 text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
            >
              View Applications
            </button>
          </Link>
          <button
            onClick={() => onAction?.("edit", job.id)}
            className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Edit
          </button>
          <button
            onClick={() => onAction?.("delete", job.id)}
            className="inline-flex items-center px-3 py-1.5 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      )}

      {type === "wishlist" && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => onAction?.("remove", job.id)}
            className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Remove from Wishlist
          </button>
        </div>
      )}
    </div>
  );
}

export default JobCardProps;
