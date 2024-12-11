import React from "react";
import { ArrowRight } from "lucide-react";
import avathar from "/images/avathar.jpg";

const JobCard = ({
  company,
  logo,
  title,
  location,
  description,
  type,
  tags,
}) => (
  <div className="border rounded-lg p-6 hover:border-blue-500 transition-all cursor-pointer">
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
        <img src={avathar} alt={company} className="w-8 h-8 object-contain" />
      </div>
      <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
        {type}
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
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`px-3 py-1 rounded-full text-sm ${
            tag === "Marketing"
              ? "bg-orange-50 text-orange-600"
              : tag === "Design"
              ? "bg-blue-50 text-blue-600"
              : tag === "Business"
              ? "bg-purple-50 text-purple-600"
              : tag === "Technology"
              ? "bg-red-50 text-red-600"
              : "bg-gray-50 text-gray-600"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const FeaturedJobs = () => {
  const jobs = [
    {
      company: "Revolut",
      logo: "/api/placeholder/32/32",
      title: "Email Marketing",
      location: "Madrid, Spain",
      description:
        "Revolut is looking for Email Marketing to help team maintain and improve...",
      type: "Full Time",
      tags: ["Marketing", "Design"],
    },
    {
      company: "Dropbox",
      logo: "/api/placeholder/32/32",
      title: "Brand Designer",
      location: "San Francisco, US",
      description:
        "Dropbox is looking for Brand Designer to help the team create...",
      type: "Full Time",
      tags: ["Design", "Business"],
    },
    {
      company: "Pitch",
      logo: "/api/placeholder/32/32",
      title: "Email Marketing",
      location: "Berlin, Germany",
      description:
        "Pitch is looking for Customer Manager to join marketing team...",
      type: "Full Time",
      tags: ["Marketing"],
    },
    {
      company: "Blinkist",
      logo: "/api/placeholder/32/32",
      title: "Visual Designer",
      location: "Granada, Spain",
      description:
        "Blinkist is looking for Visual Designer to help team design...",
      type: "Full Time",
      tags: ["Design"],
    },
    {
      company: "ClassPass",
      logo: "/api/placeholder/32/32",
      title: "Product Designer",
      location: "Manchester, UK",
      description: "ClassPass is looking for Product Designer to help us...",
      type: "Full Time",
      tags: ["Marketing", "Design"],
    },
    {
      company: "Canva",
      logo: "/api/placeholder/32/32",
      title: "Lead Designer",
      location: "Ontario, Canada",
      description: "Canva is looking for Lead Engineer to help develop...",
      type: "Full Time",
      tags: ["Design", "Business"],
    },
    {
      company: "GoDaddy",
      logo: "/api/placeholder/32/32",
      title: "Brand Strategist",
      location: "Marseille, France",
      description:
        "GoDaddy is looking for Brand Strategist to join the team...",
      type: "Full Time",
      tags: ["Marketing"],
    },
    {
      company: "Twitter",
      logo: "/api/placeholder/32/32",
      title: "Data Analyst",
      location: "San Diego, US",
      description: "Twitter is looking for Data Analyst to help team design...",
      type: "Full Time",
      tags: ["Technology"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          Featured <span className="text-blue-500">jobs</span>
        </h2>
        <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
          Show all jobs
          <ArrowRight size={16} />
        </button>
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
