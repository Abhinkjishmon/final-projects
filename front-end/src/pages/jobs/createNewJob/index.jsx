import React, { useState } from "react";

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    tags: "",
    jobRole: "",
    minSalary: "",
    maxSalary: "",
    currency: "INR",
    vacancies: "",
    jobLevel: "",
    country: "",
    city: "",
    jobDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container mx-auto my-32 p-4 max-w-4xl ">
      <h1 className="text-2xl font-bold mb-4">Post a Job</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Job Title */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="jobTitle" className="block text-sm font-medium">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            placeholder="Add job title, role, vacancies etc."
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block text-sm font-medium">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            placeholder="Job keyword, tags etc."
            value={formData.tags}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Job Role */}
        <div>
          <label htmlFor="jobRole" className="block text-sm font-medium">
            Job Role
          </label>
          <select
            name="jobRole"
            id="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="">Select...</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
          </select>
        </div>

        {/* Salary */}
        <div>
          <label htmlFor="minSalary" className="block text-sm font-medium">
            Min Salary
          </label>
          <input
            type="number"
            name="minSalary"
            id="minSalary"
            placeholder="Minimum Salary"
            value={formData.minSalary}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="maxSalary" className="block text-sm font-medium">
            Max Salary
          </label>
          <input
            type="number"
            name="maxSalary"
            id="maxSalary"
            placeholder="Maximum Salary"
            value={formData.maxSalary}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Vacancies */}
        <div>
          <label htmlFor="vacancies" className="block text-sm font-medium">
            Vacancies
          </label>
          <input
            type="number"
            name="vacancies"
            id="vacancies"
            placeholder="Number of Vacancies"
            value={formData.vacancies}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Job Level */}
        <div>
          <label htmlFor="jobLevel" className="block text-sm font-medium">
            Job Level
          </label>
          <select
            name="jobLevel"
            id="jobLevel"
            value={formData.jobLevel}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="">Select...</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium">
            Country
          </label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="">Select...</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Job Description */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="jobDescription" className="block text-sm font-medium">
            Job Description
          </label>
          <textarea
            name="jobDescription"
            id="jobDescription"
            placeholder="Add your description..."
            value={formData.jobDescription}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md h-24"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-purple-700"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPostingForm;
