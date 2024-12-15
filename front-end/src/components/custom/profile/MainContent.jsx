import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

const MainContent = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProfileHeader />
      <ProfileInfo />
    </div>
  );
};

export default MainContent;
