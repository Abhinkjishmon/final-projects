import React from "react";

const ExpatTools = () => {
  return (
    <div className="bg-gray-100 py-28 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Make your expat journey easier with our handy tools
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/api/placeholder/100/100"
              alt="Directory"
              className="mb-4"
            />
            <h3 className="text-lg font-medium mb-2">Directory</h3>
            <p className="text-gray-600 mb-4">
              Find a service provider for your finances, education, and
              everything in between
            </p>
            <a href="#" className="text-teal-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/api/placeholder/100/100"
              alt="Job search"
              className="mb-4"
            />
            <h3 className="text-lg font-medium mb-2">Job search</h3>
            <p className="text-gray-600 mb-4">
              Looking for work? Search our job postings to discover a position
              suited to your talents
            </p>
            <a href="#" className="text-teal-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/api/placeholder/100/100" alt="Dating" className="mb-4" />
            <h3 className="text-lg font-medium mb-2">Dating</h3>
            <p className="text-gray-600 mb-4">
              Put yourself out there! Meet expats with similar experiences and
              find your soulmate
            </p>
            <a href="#" className="text-teal-500 hover:underline">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpatTools;
