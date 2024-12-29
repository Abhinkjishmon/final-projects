import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import google from "/images/google.png";
import { getLatestJobs } from "@/apiService.js/job.service";
import { Link } from "react-router-dom";

const JobCard = ({ _id, title, company, location, skills }) => (
  <Link to={`/find-job/about-job/${_id}`}>
    <div className="flex items-center border gap-4 p-4 hover:bg-gray-50 rounded-lg transition-all cursor-pointer group">
      <div className="flex-grow">
        <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
          <span>{company}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full text-sm bg-emerald-50 text-emerald-600">
            Full Time
          </span>
          {skills.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                tag === "Marketing"
                  ? "bg-orange-50 text-orange-600"
                  : tag === "Design"
                  ? "bg-blue-50 text-blue-600"
                  : "bg-gray-50 text-gray-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Link>
);

const LatestJobs = () => {
  const [jobs, setjob] = useState([]);
  const fetchLatestJobs = async () => {
    const responce = await getLatestJobs();
    setjob(responce.latestJobs);
  };
  useEffect(() => {
    fetchLatestJobs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          Latest <span className="text-blue-500">jobs open</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs?.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
