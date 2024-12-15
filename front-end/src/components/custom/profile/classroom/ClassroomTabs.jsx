import React from "react";
import TabButton from "./TabButton";


function ClassroomTabs({ activeTab, onTabChange }) {
  return (
    <div className="flex gap-2 mb-8 bg-gray-50 p-1 rounded-lg ">
      <TabButton
        active={activeTab === "my-classes"}
        onClick={() => onTabChange("my-classes")}
      >
        My Classes
      </TabButton>
      <TabButton
        active={activeTab === "joined-classes"}
        onClick={() => onTabChange("joined-classes")}
      >
        Joined Classes
      </TabButton>
    </div>
  );
}

export default ClassroomTabs;
