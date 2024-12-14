import React from "react";
import { Search, Star } from "lucide-react";

const Rightbar = () => {
  return (
    <div className="w-80 bg-white p-4 border-l border-gray-200 h-screen overflow-y-auto hidden xl:block">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">My Courses</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Course & Class"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-gray-500 mb-4">DESIGN</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex space-x-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
              <div>
                <h4 className="font-medium text-sm">
                  Manage Assets & Symbol for Better Work
                </h4>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">4/10</span>
                  </div>
                  <span className="text-sm text-gray-600">7.6/10</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Related Courses</h2>
        <div className="space-y-4">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="rounded-lg overflow-hidden border border-gray-200"
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Course thumbnail"
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h4 className="font-medium">How to Attract Client 1st time</h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-600">Petra Pinda</span>
                  <span className="text-sm text-gray-600">15k Views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
