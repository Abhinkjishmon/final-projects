import { Rightbar, Sidebar } from "@/components/custom";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";

const Assignments = () => {
  // Sample assignments data
  const assignments = [
    {
      id: 1,
      title: "Math Assignment 1",
      description: "Solve the problems in the worksheet.",
      submissionTime: "2024-12-20 5:00 PM",
    },
    {
      id: 2,
      title: "Science Project",
      description: "Create a model of the solar system.",
      submissionTime: "2024-12-22 10:00 AM",
    },
    {
      id: 3,
      title: "History Essay",
      description: "Write an essay on the French Revolution.",
      submissionTime: "2024-12-25 6:00 PM",
    },
    {
      id: 3,
      title: "History Essay",
      description: "Write an essay on the French Revolution.",
      submissionTime: "2024-12-25 6:00 PM",
    },
    {
      id: 3,
      title: "History Essay",
      description: "Write an essay on the French Revolution.",
      submissionTime: "2024-12-25 6:00 PM",
    },
    {
      id: 3,
      title: "History Essay",
      description: "Write an essay on the French Revolution.",
      submissionTime: "2024-12-25 6:00 PM",
    },
  ];

  const fileInputRef = useRef(null);
  const onClickSubAssignmentBtn = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-4 space-y-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex md:flex-row flex-col justify-between items-center">
              <h1 className="text-2xl font-bold">Assignments</h1>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Create New Assignment
              </button>
            </div>

            {/* Assignment Cards */}
            <div className="space-y-4">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                >
                  <h2 className="text-lg font-semibold">{assignment.title}</h2>
                  <p className="text-gray-600">{assignment.description}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Submission Time: {assignment.submissionTime}
                  </p>
                  <div className="mt-4">
                    <input type="file" ref={fileInputRef} className=" hidden" />
                    <Button onClick={onClickSubAssignmentBtn}>
                      Submit Assignment
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Rightbar />
    </div>
  );
};

export default Assignments;
