import { Rightbar, Sidebar } from "@/components/custom";
import React, { useState } from "react";

function LiveClass() {
  const [classes, setClasses] = useState([
    {
      id: 1,
      title: "React Basics",
      description: "Learn the fundamentals of React.js.",
      date: "2024-12-15",
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Master JavaScript for professional development.",
      date: "2024-12-16",
      time: "2:00 PM",
    },
    {
      id: 3,
      title: "Tailwind CSS Workshop",
      description: "Style modern web applications with Tailwind CSS.",
      date: "2024-12-17",
      time: "5:00 PM",
    },
  ]);

  const handleCreateClass = () => {
    alert("Create New Class functionality goes here!");
  };

  const handleJoinClass = (classTitle) => {
    alert(`Joining class: ${classTitle}`);
  };

  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="w-fullmx-auto space-y-6">
          <div className="min-h-screen bg-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Live Classes</h1>
              <button
                onClick={handleCreateClass}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
              >
                Create New Class
              </button>
            </div>

            {/* Classes Section */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {classes.map((cls) => (
                <div
                  key={cls.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    {cls.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{cls.description}</p>
                  <p className="text-sm text-gray-500 mt-4">
                    Date: <span className="font-medium">{cls.date}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Time: <span className="font-medium">{cls.time}</span>
                  </p>
                  <button
                    onClick={() => handleJoinClass(cls.title)}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                  >
                    Join Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Rightbar />
    </div>
  );
}

export default LiveClass;
