import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Paintbrush,
  LineChart,
  Megaphone,
  Wallet,
  Monitor,
  Code,
  Briefcase,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ icon: Icon, title, jobCount }) => (
  <Link to={`job-lists?category=${title}`}>
    <div
      className={`p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 transition-all cursor-pointer`}
    >
      <div className="flex flex-col h-full">
        <div className="text-blue-600">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm opacity-80">{jobCount} jobs available</span>
          <ArrowRight size={16} className="opacity-60" />
        </div>
      </div>
    </div>
  </Link>
);

const JobCategories = () => {
  const categories = [
    { icon: Paintbrush, title: "Design", jobCount: 235 },
    { icon: LineChart, title: "Sales", jobCount: 756 },
    { icon: Megaphone, title: "Marketing", jobCount: 140 },
    { icon: Wallet, title: "Finance", jobCount: 325 },
    { icon: Monitor, title: "Technology", jobCount: 436 },
    { icon: Code, title: "Engineering", jobCount: 542 },
    { icon: Briefcase, title: "Business", jobCount: 211 },
    { icon: Users, title: "Human Resource", jobCount: 346 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          Explore by <span className="text-blue-500">category</span>
        </h2>
        <Link to={"job-lists"}>
          <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            Show all jobs
            <ArrowRight size={16} />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            icon={category.icon}
            title={category.title}
            jobCount={category.jobCount}
          />
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
