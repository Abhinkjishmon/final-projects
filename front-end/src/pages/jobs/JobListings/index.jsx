import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const JobListings = () => {
  const [expandedSections, setExpandedSections] = useState({
    salary: false,
    companyType: false,
    roleCategory: false,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const filters = {
    salary: [
      { label: "3-6 Lakhs", count: 67969 },
      { label: "6-10 Lakhs", count: 90932 },
      { label: "10-15 Lakhs", count: 52374 },
      { label: "15-25 Lakhs", count: 14768 },
    ],
    companyType: [
      { label: "Foreign MNC", count: 44836 },
      { label: "Corporate", count: 14962 },
      { label: "Indian MNC", count: 3908 },
      { label: "Startup", count: 2196 },
    ],
    roleCategory: [
      { label: "Software Development", count: 77071 },
      { label: "DBA / Data warehouse", count: 8361 },
      { label: "Quality Assurance", count: 7500 },
      { label: "Other Design", count: 4349 },
    ],
  };

  const jobListings = [
    {
      title: "Web Designer",
      company: "Vega Moon Technologies",
      rating: 4.2,
      reviews: 43,
      experience: "1 Yrs",
      salary: "Not disclosed",
      location: "Ghaziabad, New Delhi",
      skills: [
        "jQuery",
        "Illustrator",
        "MySQL",
        "WordPress",
        "Javascript",
        "PHP",
        "HTML",
        "Adobe",
      ],
      description:
        "You should have excellent Knowledge of HTML5, CSS3, Responsive design",
      logo: "VM",
      postedDays: "30+ Days Ago",
    },
    {
      title: "Web Designer - Rotational Night Shifts",
      company: "FoodHub Software Solutions",
      rating: 4.0,
      reviews: 51,
      experience: "1-3 Yrs",
      salary: "2-4.5 Lacs PA",
      location: "Chennai(Porur)",
      skills: [
        "CSS",
        "responsive",
        "HTML",
        "bootstrap",
        "web design",
        "Responsive Web Design",
      ],
      description:
        "Be flexible with rotational shifts and week-offs. Meet specified turnaround time",
      logo: "FH",
      postedDays: "11 Days Ago",
    },
    {
      title: "Web Designer - Rotational Night Shifts",
      company: "FoodHub Software Solutions",
      rating: 4.0,
      reviews: 51,
      experience: "1-3 Yrs",
      salary: "2-4.5 Lacs PA",
      location: "Chennai(Porur)",
      skills: [
        "CSS",
        "responsive",
        "HTML",
        "bootstrap",
        "web design",
        "Responsive Web Design",
      ],
      description:
        "Be flexible with rotational shifts and week-offs. Meet specified turnaround time",
      logo: "FH",
      postedDays: "11 Days Ago",
    },
    {
      title: "Web Designer - Rotational Night Shifts",
      company: "FoodHub Software Solutions",
      rating: 4.0,
      reviews: 51,
      experience: "1-3 Yrs",
      salary: "2-4.5 Lacs PA",
      location: "Chennai(Porur)",
      skills: [
        "CSS",
        "responsive",
        "HTML",
        "bootstrap",
        "web design",
        "Responsive Web Design",
      ],
      description:
        "Be flexible with rotational shifts and week-offs. Meet specified turnaround time",
      logo: "FH",
      postedDays: "11 Days Ago",
    },
    {
      title: "Web Designer - Rotational Night Shifts",
      company: "FoodHub Software Solutions",
      rating: 4.0,
      reviews: 51,
      experience: "1-3 Yrs",
      salary: "2-4.5 Lacs PA",
      location: "Chennai(Porur)",
      skills: [
        "CSS",
        "responsive",
        "HTML",
        "bootstrap",
        "web design",
        "Responsive Web Design",
      ],
      description:
        "Be flexible with rotational shifts and week-offs. Meet specified turnaround time",
      logo: "FH",
      postedDays: "11 Days Ago",
    },
    {
      title: "Web Designer - Rotational Night Shifts",
      company: "FoodHub Software Solutions",
      rating: 4.0,
      reviews: 51,
      experience: "1-3 Yrs",
      salary: "2-4.5 Lacs PA",
      location: "Chennai(Porur)",
      skills: [
        "CSS",
        "responsive",
        "HTML",
        "bootstrap",
        "web design",
        "Responsive Web Design",
      ],
      description:
        "Be flexible with rotational shifts and week-offs. Meet specified turnaround time",
      logo: "FH",
      postedDays: "11 Days Ago",
    },
    {
      title: "Web Designer - Rotational Night Shifts",
      company: "FoodHub Software Solutions",
      rating: 4.0,
      reviews: 51,
      experience: "1-3 Yrs",
      salary: "2-4.5 Lacs PA",
      location: "Chennai(Porur)",
      skills: [
        "CSS",
        "responsive",
        "HTML",
        "bootstrap",
        "web design",
        "Responsive Web Design",
      ],
      description:
        "Be flexible with rotational shifts and week-offs. Meet specified turnaround time",
      logo: "FH",
      postedDays: "11 Days Ago",
    },
  ];

  const SearchBar = () => (
    <div className="bg-white shadow-sm mb-6 p-4 rounded-lg">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search jobs by title, company, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        {searchQuery && (
          <div className="mt-2 text-sm text-gray-600">
            Showing results for "{searchQuery}"
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
                {item.label} ({item.count})
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const JobCard = ({ job }) => (
    <Card className="mb-4">
      <Link to={"/find-job/about-job"}>
        <CardContent className="p-4">
          <div className="flex justify-between">
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <button className="text-blue-600">
                  <Save size={20} />
                </button>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="font-medium">{job.company}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1">{job.rating}</span>
                  <span className="ml-1 text-gray-600">
                    ({job.reviews} Reviews)
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-3 text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {job.experience}
                </div>
                <div className="flex items-center">
                  <IndianRupee className="h-4 w-4 mr-1" />
                  {job.salary}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
              </div>
              <p className="mt-3 text-gray-600">{job.description}</p>
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
              <div className="mt-4 text-gray-500 text-sm">{job.postedDays}</div>
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
          {/* Filters Section */}
          <div className="md:w-1/4 bg-white h-[100%] rounded-lg shadow">
            <FilterSection
              title="Salary"
              items={filters.salary}
              isExpanded={expandedSections.salary}
              onToggle={() => toggleSection("salary")}
            />
            <FilterSection
              title="Company type"
              items={filters.companyType}
              isExpanded={expandedSections.companyType}
              onToggle={() => toggleSection("companyType")}
            />
            <FilterSection
              title="Role category"
              items={filters.roleCategory}
              isExpanded={expandedSections.roleCategory}
              onToggle={() => toggleSection("roleCategory")}
            />
          </div>

          {/* Job Listings Section */}
          <div className="md:w-3/4">
            {jobListings.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
