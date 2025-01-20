import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  IndianRupee,
  Star,
  Save,
  Search,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { getAllJobs } from "@/apiService.js/job.service";
import { SkeletonCard, Spinner } from "@/components/custom";
import { getRelativeTime } from "@/utils/date";
import { scrollToTop } from "@/utils/scroll";

const JobListings = () => {
  const [loader, setLaoder] = useState(false);
  const [jobListings, setjobListings] = useState([]);
  const [expandedSections, setExpandedSections] = useState({
    salary: false,
    companyType: false,
    roleCategory: false,
  });
  const [searchName, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const filters = {
    companyType: [
      { label: "Internship" },
      { label: "Contract" },
      { label: "Part-time" },
      { label: "Full-time" },
    ],
    roleCategory: [
      { label: "Software Development" },
      { label: "DBA / Data warehouse" },
      { label: "Quality Assurance" },
      { label: "Other Design" },
    ],
    category: [
      { label: "Human Resource" },
      { label: "Business" },
      { label: "Engineering" },
      { label: "Technology" },
      { label: "Finance" },
      { label: "Marketing" },
      { label: "Sales" },
      { label: "Designg" },
    ],
  };

  const fetchAllJobs = async () => {
    const response = await getAllJobs(category);
    setjobListings(response.jobs);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredJobs(originalJobs);
      return;
    }

    const filtered = originalJobs.filter((job) => {
      const searchTerm = query.toLowerCase();
      return (
        job.title.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm)
      );
    });

    setFilteredJobs(filtered);
  };
  useEffect(() => {
    scrollToTop();
    fetchAllJobs();
  }, []);

  const SearchBar = () => (
    <div className="bg-white shadow-sm mb-6 p-4 rounded-lg">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search jobs by title, company, or keywords..."
            value={searchName}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        {searchName && (
          <div className="mt-2 text-sm text-gray-600">
            Showing results for "{searchName}"
          </div>
        )}
      </div>
    </div>
  );
  const FilterSection = ({ title, items, isExpanded, onToggle }) => (
    <div className="border-b p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isExpanded && (
        <div className="mt-3 space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox id={`${title}-${index}`} />
              <label htmlFor={`${title}-${index}`} className="text-sm">
                {item.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const JobCard = ({ job }) => (
    <Card className="mb-4">
      <Link to={`/find-job/about-job/${job._id}`}>
        <CardContent className="p-4">
          <div className="flex justify-between">
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{job.title}</h2>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="font-medium">{job.company}</span>
                <div className="flex items-center">
                  <span className="ml-1 text-gray-600">
                    ({job.reviews} Applications)
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-3 text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="font-bold">Experience:</span>
                  {job.experienceRequired}y
                </div>
                <div className="flex items-center">
                  <IndianRupee className="h-4 w-4 mr-1" />
                  <span className="font-bold">Salary:</span>

                  {job.salary ? job.salary : "Not disclosed"}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
              </div>
              <p className="mt-3 text-gray-600">
                {job.description.length > 50
                  ? `${job.description.substring(0, 100)}...`
                  : job.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-gray-500 text-sm">
                {getRelativeTime(job.postedDate)}
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <SearchBar />
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 bg-white h-[100%] rounded-lg shadow">
            <FilterSection
              title="Job Type"
              items={filters.companyType}
              isExpanded={expandedSections.companyType}
              onToggle={() => toggleSection("companyType")}
            />
            <FilterSection
              title="Experience"
              items={filters.roleCategory}
              isExpanded={expandedSections.roleCategory}
              onToggle={() => toggleSection("roleCategory")}
            />
            <FilterSection
              title="Category"
              items={filters.category}
              isExpanded={expandedSections.roleCategory}
              onToggle={() => toggleSection("roleCategory")}
            />
          </div>

          {loader ? (
            <>
              <SkeletonCard />
            </>
          ) : (
            <>
              {jobListings.length > 0 ? (
                <>
                  <div className="md:w-3/4">
                    {jobListings.map((job, index) => (
                      <JobCard key={index} job={job} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="w-full text-center">
                  <h2 className="text-xl text-gray-600">No Job Found</h2>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListings;
