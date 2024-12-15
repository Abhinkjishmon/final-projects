import React, { useState } from "react";

import ClassroomHeader from "./ClassroomHeader";
import ClassroomTabs from "./ClassroomTabs";
import ClassList from "./ClassList";

function ClassroomPage() {
  const myClasses = [
    {
      id: "1",
      name: "Advanced Mathematics",
      teacher: "Dr. Sarah Johnson",
      subject: "Mathematics",
      students: 28,
    },
    {
      id: "2",
      name: "Physics 101",
      teacher: "Prof. Michael Chen",
      subject: "Physics",
      students: 24,
    },
  ];

  const joinedClasses = [
    {
      id: "3",
      name: "Web Development",
      teacher: "Prof. Emily Rodriguez",
      subject: "Computer Science",
      students: 32,
    },
    {
      id: "4",
      name: "English Literature",
      teacher: "Ms. Amanda Brown",
      subject: "English",
      students: 26,
    },
  ];
  const [activeTab, setActiveTab] = useState("my-classes");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ClassroomHeader />

        <ClassroomTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-6">
          {activeTab === "my-classes" ? (
            <ClassList title="My Classes" classes={myClasses} />
          ) : (
            <ClassList title="Joined Classes" classes={joinedClasses} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ClassroomPage;
