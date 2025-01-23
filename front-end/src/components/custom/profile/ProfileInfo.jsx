import React, { useEffect, useState } from "react";
import { MapPin, Link as LinkIcon, Twitter, Github } from "lucide-react";

function ProfileInfo({ profileInfo }) {
  console.log(profileInfo);
  return (
    <div className="max-w-5xl mx-auto my-9 px-4 sm:px-6 lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
            {profileInfo?.about ? (
              <p className="text-gray-600">{profileInfo?.about}</p>
            ) : (
              <p>No Bio</p>
            )}

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-4">
              What I'm Doing
            </h2>
            <p className="text-gray-600 mt-2">{profileInfo?.experience}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>
                  {profileInfo?.address.street}, {profileInfo?.address.city},{" "}
                  {profileInfo?.address.state}, {profileInfo?.address.country}
                </span>
              </div>
              <div>
                {profileInfo?.socialMediaLinks?.twitter && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Twitter className="h-5 w-5" />
                    <a
                      href={profileInfo?.socialMediaLinks?.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Twitter
                    </a>
                  </div>
                )}

                {profileInfo?.socialMediaLinks?.github && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Github className="h-5 w-5" />
                    <a
                      href={profileInfo?.socialMediaLinks?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Github
                    </a>
                  </div>
                )}
                {profileInfo?.socialMediaLinks?.linkedin && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <LinkedIn className="h-5 w-5" />
                    <a
                      href={profileInfo?.socialMediaLinks?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
