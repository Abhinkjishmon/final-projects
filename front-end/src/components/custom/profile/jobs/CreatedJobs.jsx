import React from "react";

import JobCardProps from "./JobCardProps";

// Mock data - In a real app, this would come from an API
const mockCreatedJobs = [
  {
    id: "1",
    title: "React Developer",
    company: "My Company",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100k - $130k",
    description: "We are seeking a React developer...",
    requirements: ["3+ years React experience", "TypeScript"],
    postedDate: "2024-03-12",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "My Company",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $100k",
    description: "Looking for a creative UI/UX designer...",
    requirements: ["Figma", "User Research", "Prototyping"],
    postedDate: "2024-03-11",
  },
];

function CreatedJobs() {
  const handleJobAction = (action, jobId) => {
    // In a real app, these actions would trigger API calls
    switch (action) {
      case "view":
        console.log("View job details:", jobId);
        break;
      case "applications":
        console.log("View applications for job:", jobId);
        break;
      case "edit":
        console.log("Edit job:", jobId);
        break;
      case "delete":
        console.log("Delete job:", jobId);
        break;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Created Jobs</h2>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Create New Job
        </button>
      </div>
      {mockCreatedJobs.map((job) => (
        <JobCardProps
          key={job.id}
          job={job}
          type="created"
          onAction={handleJobAction}
        />
      ))}
    </div>
  );
}

export default CreatedJobs;
