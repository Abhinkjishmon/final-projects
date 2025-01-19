import React, { useEffect, useState } from "react";
import {
  joinClassRooms,
  leaveClassRooms,
} from "@/apiService.js/acadamic.service";
import { toast } from "react-toastify";
import { getLocalStorageItem } from "@/utils/localStorage";

const CourseInfo = ({ classRoomDetails }) => {
  const { userId } = getLocalStorageItem("user");
  const [isUserparticipants, setparticipant] = useState();

  const joinClassRoom = async () => {
    setparticipant(true);
    const response = await joinClassRooms(classRoomDetails._id);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
    }
  };
  const leaveClassRoom = async () => {
    setparticipant(false);
    const response = await leaveClassRooms(classRoomDetails._id);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
    }
  };

  useEffect(() => {
    if (classRoomDetails?.participants) {
      const isUserAlreadyJoined = classRoomDetails.participants.find(
        (data) => data.userId && data.userId._id === userId
      );
      setparticipant(isUserAlreadyJoined);
    }
  }, [classRoomDetails]);
  return (
    <div className="bg-white p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-2">{classRoomDetails?.title}</h1>
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <img
            src={classRoomDetails?.createdBy?.profileImg}
            alt="Mentor"
            className="w-8 h-8 object-cover rounded-full"
          />
          <span className="text-gray-600">
            {classRoomDetails?.createdBy?.fullname}
          </span>
        </div>
        <span className="text-gray-600">
          Total Students ({classRoomDetails?.participants.length})
        </span>
        <span className="text-gray-400">•</span>
        {isUserparticipants ? (
          <button
            className="text-blue-500 border border-black p-2 rounded-md hover:text-blue-600"
            onClick={leaveClassRoom}
          >
            Leave Class Room
          </button>
        ) : (
          <button
            className="text-blue-500 border border-black p-2 rounded-md hover:text-blue-600"
            onClick={joinClassRoom}
          >
            Join Class Room
          </button>
        )}
      </div>

      <div className="flex space-x-4 border-b border-gray-200 mb-6">
        <button className="px-4 py-2 text-blue-500 border-b-2 border-blue-500">
          CLASS DETAIL
        </button>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex flex-col items-center justify-between">
            <div className="min-h-screen w-full bg-gray-50 p-6">
              <header className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                  Course Overview
                </h1>
                <p className="text-gray-600 mt-2">
                  Learn why this course stands out and what it covers.
                </p>
              </header>
              <div className="w-full mx-auto space-y-10">
                <section className="bg-white max-w-5xl shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {classRoomDetails?.description}
                  </p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Why is this best?
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {classRoomDetails?.whyGood}
                  </p>
                </section>

                <section className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    What is Cover/Syllabus?
                  </h2>
                  <div className="space-y-4">
                    {classRoomDetails?.syllabus.map((module, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-md shadow-sm"
                      >
                        <h3 className="font-bold text-gray-800">
                          {module.title}
                        </h3>
                        <p className="text-gray-700">{module.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
