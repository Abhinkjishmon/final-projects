import React, { useEffect, useState } from "react";

import ClassroomHeader from "./ClassroomHeader";
import ClassroomTabs from "./ClassroomTabs";
import ClassList from "./ClassList";
import {
  getClassrooms,
  getJoinedClassrooms,
} from "@/apiService.js/profile.service";

function ClassroomPage() {
  const [activeTab, setActiveTab] = useState("my-classes");
  const [myClasses, setClasses] = useState();
  const [isDeleted, setDeleted] = useState(false);
  const [joinedClasses, setjoinedClasses] = useState();
  useEffect(() => {
    const getCreatedClassroom = async () => {
      const response = await getClassrooms();
      const joinedClass = await getJoinedClassrooms();
      setClasses(response.classrooms);
      setjoinedClasses(joinedClass.classrooms);
    };
    getCreatedClassroom();
  }, [isDeleted]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ClassroomHeader />

        <ClassroomTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-6">
          {activeTab === "my-classes" ? (
            <ClassList
              title="My Classes"
              classes={myClasses}
              activeTab={activeTab}
              onDelete={() => setDeleted(true)}
            />
          ) : (
            <ClassList
              title="Joined Classes"
              classes={joinedClasses}
              activeTab={activeTab}
              onDelete={() => setDeleted(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ClassroomPage;
