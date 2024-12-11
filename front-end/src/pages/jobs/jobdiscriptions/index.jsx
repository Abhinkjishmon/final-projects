import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  IndianRupee,
  Star,
  Save,
  Briefcase,
  Users,
  GraduationCap,
  Building2,
  Share2,
} from "lucide-react";

const JobDescriptionPage = () => {
  const jobDetails = {
    title: "Web Designer",
    company: "Vega Moon Technologies",
    rating: 4.2,
    reviews: 43,
    experience: "1 Yrs",
    salary: "Not disclosed",
    location: "Ghaziabad, New Delhi",
    postedDays: "30+ Days Ago",
    employeeCount: "51-200",
    jobType: "Full Time",
    department: "Design",
    education: "Bachelor's Degree",
    description: `We are looking for a Web Designer who will be responsible for creating great user experiences for our clients.

Key Responsibilities:
• Create user-friendly web interfaces using HTML5, CSS3, and JavaScript
• Develop responsive designs that work across all devices
• Collaborate with backend developers and other team members
• Optimize applications for maximum speed and scalability
• Stay up-to-date with the latest web trends and technologies

Required Skills:
• Proven experience as a Web Designer
• Strong knowledge of HTML5, CSS3, JavaScript
• Experience with responsive design
• Knowledge of Adobe Creative Suite
• Understanding of cross-browser compatibility
• Basic understanding of SEO principles`,
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
  };

  const similarJobs = [
    {
      title: "Senior Web Designer",
      company: "TechCorp Solutions",
      location: "Bangalore",
      experience: "2-4 Yrs",
      salary: "8-12 LPA",
      postedDays: "2 Days Ago",
      skills: ["UI/UX", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "UI/UX Designer",
      company: "Digital Dynamics",
      location: "Pune",
      experience: "1-3 Yrs",
      salary: "6-9 LPA",
      postedDays: "5 Days Ago",
      skills: ["Figma", "Adobe XD", "HTML", "CSS"],
    },
  ];

  const JobDetail = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-2 text-gray-600">
      <Icon size={18} className="text-gray-500" />
      <span className="font-medium">{label}:</span>
      <span>{value}</span>
    </div>
  );

  const SimilarJobCard = ({ job }) => (
    <Card className="mb-4">
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
        <p className="text-gray-600 mb-2">{job.company}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {job.location}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            {job.experience}
          </div>
          <div className="flex items-center gap-2">
            <IndianRupee size={16} />
            {job.salary}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {job.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-3 text-xs text-gray-500">{job.postedDays}</div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <Card>
              <CardContent className="p-6">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">
                      {jobDetails.title}
                    </h1>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-medium">{jobDetails.company}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1">{jobDetails.rating}</span>
                        <span className="ml-1 text-gray-600">
                          ({jobDetails.reviews} Reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Save className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                  </div>
                </div>

                {/* Key Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <JobDetail
                    icon={Clock}
                    label="Experience"
                    value={jobDetails.experience}
                  />
                  <JobDetail
                    icon={IndianRupee}
                    label="Salary"
                    value={jobDetails.salary}
                  />
                  <JobDetail
                    icon={MapPin}
                    label="Location"
                    value={jobDetails.location}
                  />
                  <JobDetail
                    icon={Briefcase}
                    label="Job Type"
                    value={jobDetails.jobType}
                  />
                  <JobDetail
                    icon={Users}
                    label="Company Size"
                    value={jobDetails.employeeCount}
                  />
                  <JobDetail
                    icon={Building2}
                    label="Department"
                    value={jobDetails.department}
                  />
                  <JobDetail
                    icon={GraduationCap}
                    label="Education"
                    value={jobDetails.education}
                  />
                </div>

                {/* Skills Section */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {jobDetails.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Job Description */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3">
                    Job Description
                  </h2>
                  <div className="whitespace-pre-line text-gray-600">
                    {jobDetails.description}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="flex justify-center">
                  <Button size="lg" className="px-8">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Similar Jobs</h2>
              {similarJobs.map((job, index) => (
                <SimilarJobCard key={index} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionPage;
