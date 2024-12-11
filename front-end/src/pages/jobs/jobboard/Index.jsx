import React from "react";
import JobboardImg from "/images/jobboard.png";
import "./style.css";
import { CreateJob, FeaturedJobs, JobCategories, LatestJobs } from "@/components/custom";

function Jobboard() {
  return (
    <>
      <section className="bg-blue-300 home flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Discover more than{" "}
            <span className="text-blue-600 underline decoration-wavy">
              5000+ Jobs
            </span>
          </h1>
          <p className="text-gray-500 text-lg mt-4">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center md:items-stretch gap-4">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <select className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
              <option value="florence">Florence, Italy</option>
              <option value="florence">Florence, Italy</option>
              <option value="florence">Florence, Italy</option>
              <option value="florence">Florence, Italy</option>
              <option value="florence">Florence, Italy</option>
              <option value="florence">Florence, Italy</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
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
      <JobCategories />
      <LatestJobs/>
      <CreateJob/>
      <FeaturedJobs/>
    </>
  );
}

export default Jobboard;
