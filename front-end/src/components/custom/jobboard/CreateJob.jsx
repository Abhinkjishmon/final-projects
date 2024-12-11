import React from "react";
import { Link } from "react-router-dom";

export default function CreateJob() {
  return (
    <div className="bg-blue-600 min-h-[400px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-8">
        {/* Left side - CTA */}
        <div className="lg:w-1/2 text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Start posting jobs today
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Start posting jobs for free.
          </p>
          <Link to={"/find-job/creat-job"}>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Create Job
            </button>
          </Link>
        </div>

        {/* Right side - Dashboard Preview */}
        <div className="lg:w-1/2 relative">
          <div className="bg-white rounded-lg shadow-xl p-4">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                <span className="text-sm text-gray-600">Company</span>
                <span className="font-medium">Nomad</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm">
                Post a job
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">76</div>
                <div className="text-sm text-gray-600">Active listings</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-600">Posted this week</div>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">24</div>
                <div className="text-sm text-gray-600">Total views</div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Overview</h3>
                <div className="flex gap-4">
                  <span className="text-blue-600">Week</span>
                  <span className="text-gray-400">Month</span>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="h-32 flex items-end gap-2">
                {[60, 80, 65, 90, 70, 85, 75].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-blue-100 rounded-t-lg"
                    style={{ height: `${height}%` }}
                  >
                    <div
                      className="bg-blue-500 rounded-t-lg w-full"
                      style={{ height: `${height * 0.7}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
