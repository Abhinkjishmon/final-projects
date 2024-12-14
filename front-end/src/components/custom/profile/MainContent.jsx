import React from 'react';

const MainContent = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome Back, John!</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <p className="text-gray-600">Updated profile picture</p>
            <span className="text-sm text-gray-400">2 days ago</span>
          </div>
          <div className="border-b pb-4">
            <p className="text-gray-600">Added new gallery photos</p>
            <span className="text-sm text-gray-400">5 days ago</span>
          </div>
          <div className="pb-4">
            <p className="text-gray-600">Updated about section</p>
            <span className="text-sm text-gray-400">1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;