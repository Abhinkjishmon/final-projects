import React from "react";
import { Mail, MapPin, Link as LinkIcon, Twitter, Github } from "lucide-react";
import { useSelector } from "react-redux";
import { getLocalStorageItem } from "@/utils/localStorage";

function ProfileHeader({ profileInfo }) {
  // const user = useSelector((state) => state.user.user);
    const { userId, email, profileImg } = getLocalStorageItem("user");

  return (
    <div className="relative">
      <div className="h-48 w-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-24 sm:-mt-32 sm:flex sm:items-end sm:space-x-5">
          <div className="relative group">
            <img
              className="h-32 w-32 rounded-full ring-4 object-cover ring-white sm:h-48 sm:w-48"
              src={profileInfo?.profileImg}
              alt="Profile"
            />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {profileInfo?.fullname}
              </h1>
              <p className="text-gray-500">{profileInfo?.email}</p>
            </div>
            {userId == profileInfo?.userId && (
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Mail className="h-5 w-5 mr-2" />
                  Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileHeader;
