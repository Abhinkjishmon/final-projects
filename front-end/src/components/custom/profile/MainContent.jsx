import React, { useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import { useSelector } from "react-redux";
const MainContent = () => {
  const { profileInfo } = useSelector((state) => state.userProfile);
  return (
    <div className="min-h-screen bg-gray-100">
      <ProfileHeader profileInfo={profileInfo} />
      <ProfileInfo profileInfo={profileInfo} />
    </div>
  );
};

export default MainContent;
