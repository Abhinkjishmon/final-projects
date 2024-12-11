import React from "react";

const ExplorePage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full md:w-2/3">
        <img
          src="https://example.com/cityscape.jpg"
          alt="An introduction to the United Kingdom"
          className="w-full h-72 md:h-auto object-cover"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full">
          <h1 className="text-2xl md:text-4xl font-bold">
            An introduction to the United Kingdom
          </h1>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-gray-100 p-4 md:p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold">
              Where to live in the UK: the best places for expats
            </h2>
            <div className="flex items-center space-x-2 mt-2">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="https://example.com/city-street.jpg"
                  alt="Where to live in the UK"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-500">Moving</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">
              Moving to the UK: the ultimate checklist
            </h2>
            <div className="flex items-center space-x-2 mt-2">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="https://example.com/moving-boxes.jpg"
                  alt="Moving to the UK"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-500">Moving</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">The cost of living in the UK</h2>
            <div className="flex items-center space-x-2 mt-2">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="https://example.com/cost-of-living.jpg"
                  alt="The cost of living in the UK"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-500">Moving</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
