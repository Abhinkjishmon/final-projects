import React, { useEffect, useState } from "react";
import JobCardProps from "./JobCardProps";
import { getAppliedJobByUser } from "@/apiService.js/profile.service";

function AppliedJobs() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserApplications = async () => {
      try {
        const response = await getAppliedJobByUser();
        if (response && response.applications) {
          setApplications(response.applications);
          console.log(response)
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
      <h2 className="text-xl font-semibold text-gray-900">Applied Jobs</h2>
      {applications.length > 0 ? (
        applications.map((application) => (
          <JobCardProps
            key={application._id}
            job={application}
            type="applied"
          />
        ))
      ) : (
        <p>No applied jobs found.</p>
      )}
    </div>
  );
}

export default AppliedJobs;
