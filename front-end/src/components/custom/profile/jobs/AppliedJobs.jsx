import React from "react";

import JobCardProps from "./JobCardProps";

// Mock data - In a real app, this would come from an API
const mockAppliedJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "Looking for an experienced frontend developer...",
    requirements: ["5+ years React experience", "TypeScript", "CSS"],
    postedDate: "2024-03-10",
    status: "pending",
  },
  {
    id: "2",
    title: "Full Stack Engineer",
    company: "Innovation Labs",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $160k",
    description: "Join our dynamic team...",
    requirements: ["Node.js", "React", "PostgreSQL"],
    postedDate: "2024-03-08",
    status: "interview",
  },
];

function AppliedJobs() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Applied Jobs</h2>
      {mockAppliedJobs.map((job) => (
        <JobCardProps key={job.id} job={job} type="applied" />
      ))}
    </div>
  );
}
export default AppliedJobs;
