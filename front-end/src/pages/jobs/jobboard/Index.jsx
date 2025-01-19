import React, { useEffect, useState } from "react";
import JobboardImg from "/images/jobboard.png";
import "./style.css";
import {
  CreateJob,
  FeaturedJobs,
  JobCategories,
  LatestJobs,
} from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import { searchForJob } from "@/apiService.js/job.service";
import { Link } from "react-router-dom";

function Jobboard() {
  useEffect(() => {
    scrollToTop();
  }, []);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  const handleSearch = async () => {
    if (!title && !location) return;

    setSearched(true);

    try {
      const result = await searchForJob(title, location);
      if (result.status === "FAILD") {
        setError(result.message);
        setJobs([]);
      } else {
        setJobs(result.jobs);
        setError(null);
      }
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="bg-blue-300 home flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Unlock Your Career Potential with US!
            <span className="text-blue-600 underline decoration-wavy"></span>
          </h1>
          <p className="text-gray-500 text-lg mt-4">
            Great platform for job seekers passionate about finding new career
            heights and startups.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center md:items-stretch gap-4">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              value={title}
              onChange={handleTitleChange}
            />
            <input
              type="text"
              placeholder="Select location"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              value={location}
              onChange={handleLocationChange}
            />
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              onClick={handleSearch}
            >
              Search my job
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src={JobboardImg}
            alt="Person pointing to jobs"
            className="w-full max-w-md"
          />
        </div>
      </section>
      {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
      {searched &&
        (jobs.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mx-5 gap-6">
            {jobs.map((job) => (
              <Link to={`/find-job/about-job/${job._id}`}>
                <div
                  key={job._id}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{job.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                  <p className="text-lg font-semibold text-blue-600 mt-2">
                    {job.salary}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {job.employmentType}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-6 text-center text-red-500">
            No jobs found for the given search criteria.
          </div>
        ))}
      {!searched && (
        <div>
          <JobCategories />
          <LatestJobs />
          <CreateJob />
          <FeaturedJobs />
        </div>
      )}
    </>
  );
}

export default Jobboard;
