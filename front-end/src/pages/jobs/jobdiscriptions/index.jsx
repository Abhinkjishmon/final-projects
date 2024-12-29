import React, { useEffect, useState } from "react";
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
import { FaRegCircleCheck } from "react-icons/fa6";

import { Link, useParams } from "react-router-dom";
import { getJobWithSimilarJobs, saveJob } from "@/apiService.js/job.service";
import { getRelativeTime } from "@/utils/date";
import { scrollToTop } from "@/utils/scroll";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ApplicationForm } from "@/components/custom";

const JobDescriptionPage = () => {
  const { jobId } = useParams();
  const [jobDetails, setjobDetails] = useState();
  const [similarJobs, setSimilarJobs] = useState();
  const [isJobSaved, setjobSaved] = useState(false);
  const [isJobApplied, setJobApplied] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const fetchJobWithSimilarJobs = async () => {
    const response = await getJobWithSimilarJobs(jobId);
    setjobDetails(response.job);
    setSimilarJobs(response.similarJobs);
    setjobSaved(response.SavedJob);
    setJobApplied(response.applied);
  };
  useEffect(() => {
    scrollToTop();
    fetchJobWithSimilarJobs();
  }, [jobId]);
  const onHandleSaveJob = async () => {
    const response = await saveJob(jobId);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      navigate("/find-job");
    }
  };
  const handleFormSubmit = () => {
    setIsDialogOpen(false);
  };

  const JobDetail = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-2 text-gray-600">
      <Icon size={18} className="text-gray-500" />
      <span className="font-medium">{label}:</span>
      <span>{value}</span>
    </div>
  );

  const SimilarJobCard = ({ job }) => (
    <Link to={`/find-job/about-job/${job._id}`}>
      <Card className="mb-4">
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2">{job?.title}</h3>
          <p className="text-gray-600 mb-2">{job?.company}</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {job.location}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Experience</span>
              {job?.experienceRequired}y
            </div>
            <div className="flex items-center gap-2">
              <IndianRupee size={16} />
              <span>Salary</span>
              {job.salary ? job.salary : "Not Disclosed"}
            </div>
          </div>
          <p className="mt-3 text-gray-600">
            {job?.description.length > 50
              ? `${job.description.substring(0, 100)}...`
              : job.description}
          </p>
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
          <div className="mt-3 text-xs text-gray-500">
            {getRelativeTime(job.postedDate)}
          </div>
        </CardContent>
      </Card>
    </Link>
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
                      {jobDetails?.title}
                    </h1>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-medium">{jobDetails?.company}</span>
                      <div className="flex items-center">
                        <span className="ml-1 text-gray-600">
                          (1 Applications)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {isJobSaved ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onHandleSaveJob()}
                      >
                        <Save className="h-4 w-4 mr-1" />
                        Save
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onHandleSaveJob()}
                        className="text-green-600"
                      >
                        <FaRegCircleCheck className="h-4 w-4 mr-1 " />
                        Saved
                      </Button>
                    )}
                  </div>
                </div>

                {/* Key Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <JobDetail
                    icon={Clock}
                    label="Experience"
                    value={`${jobDetails?.experienceRequired}y`}
                  />
                  <JobDetail
                    icon={IndianRupee}
                    label="Salary"
                    value={
                      jobDetails?.salary ? jobDetails?.salary : "Not Disclosed"
                    }
                  />
                  <JobDetail
                    icon={MapPin}
                    label="Location"
                    value={jobDetails?.location}
                  />
                  <JobDetail
                    icon={Briefcase}
                    label="Job Type"
                    value={jobDetails?.employmentType}
                  />
                  <JobDetail
                    icon={Building2}
                    label="Department"
                    value={jobDetails?.category}
                  />
                </div>

                {/* Job Description */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3">
                    Job Description
                  </h2>
                  <div className="whitespace-pre-line text-gray-600">
                    {jobDetails?.description}
                  </div>
                </div>
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3">
                    Job Qualification
                  </h2>
                  <div className="whitespace-pre-line text-gray-600">
                    {jobDetails?.qualifications.map((qualification) => {
                      return <li>{qualification}</li>;
                    })}
                  </div>
                </div>
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3">
                    Job Responsibilities
                  </h2>
                  <div className="whitespace-pre-line text-gray-600">
                    {jobDetails?.responsibilities.map((responsibilitie) => {
                      return <li>{responsibilitie}</li>;
                    })}
                  </div>
                </div>
                {/* Skills Section */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {jobDetails?.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Apply Button */}
                <div className="flex justify-center">
                  {isJobApplied ? (
                    <>
                      <Button
                        size="lg"
                        variant="outline"
                        className="px-8 text-white bg-green-500 "
                      >
                        Applied
                      </Button>
                    </>
                  ) : (
                    <>
                      <Dialog
                        open={isDialogOpen}
                        onOpenChange={setIsDialogOpen}
                      >
                        <DialogTrigger>
                          <Button size="lg" className="px-8">
                            Apply Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogDescription>
                              <ApplicationForm
                                jobId={jobId}
                                onFormSubmit={handleFormSubmit}
                              />
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Similar Jobs</h2>
              {similarJobs?.map((job, index) => (
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
