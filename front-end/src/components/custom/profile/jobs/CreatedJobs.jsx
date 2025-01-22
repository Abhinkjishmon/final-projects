import React, { act, useEffect, useState } from "react";

import JobCardProps from "./JobCardProps";
import { deleteJob, jobCreatedByUser } from "@/apiService.js/profile.service";
import { Link } from "react-router-dom";

function CreatedJobs() {
  const handleJobAction = async (action, jobId) => {
    if (action == "delete") {
      const response = await deleteJob(jobId);
      console.log(response);
    }
  };
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserApplications = async () => {
      try {
        const response = await jobCreatedByUser();
        console.log(response, "ddd");
        if (response && response.jobs) {
          setApplications(response.jobs);
        }
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserApplications();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Created Jobs</h2>
        <Link to={"/find-job/creat-job"}>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            Create New Job
          </button>
        </Link>
      </div>
      {applications && applications.length > 0 ? (
        applications.map((job) => (
          <JobCardProps
            key={job.id}
            job={job}
            type="created"
            onAction={handleJobAction}
          />
        ))
      ) : (
        <p>No created jobs available</p>
      )}
    </div>
  );
}

export default CreatedJobs;
