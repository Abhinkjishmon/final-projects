import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import avathar from "/images/avathar.jpg";
import { featuredjobs } from "@/apiService.js/job.service";
import { Link } from "react-router-dom";
const colors = [
  "bg-orange-50 text-orange-600",
  "bg-blue-50 text-blue-600",
  "bg-purple-50 text-purple-600",
  "bg-red-50 text-red-600",
  "bg-gray-50 text-gray-600",
];

const JobCard = ({
  company,
  title,
  location,
  description,
  category,
  skills,
  _id,
}) => (
  <Link to={`/find-job/about-job/${_id}`}>
    <div className="border rounded-lg p-6 hover:border-blue-500 transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <div className="flex items-center gap-2 text-gray-600 mb-3">
        <span>{company}</span>
        <span className="text-gray-300">·</span>
        <span>{location}</span>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2">
        {skills.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${
              colors[index % colors.length]
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

const FeaturedJobs = () => {
  const [jobs, setjob] = useState([]);
  const fetchfeaturedjobs = async () => {
    const responce = await featuredjobs();
    setjob(responce.data);
  };
  useEffect(() => {
    fetchfeaturedjobs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          Featured <span className="text-blue-500">jobs</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
