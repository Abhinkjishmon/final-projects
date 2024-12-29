import { getUserInfo } from "@/apiService.js/auth.service";
import { MainContent, ProfileSidebar } from "@/components/custom";
import { fetchUserProfile } from "@/redux/userInfoSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

function index() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserProfile(id));
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <ProfileSidebar  />
      <div className="ml-[250px] md:ml-[80px] lg:ml-[250px] flex-1 transition-all duration-300">
        <MainContent/>
      </div>
    </div>
  );
}

export default index;
