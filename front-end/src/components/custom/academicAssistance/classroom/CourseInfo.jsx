import React from "react";
import { Clock, Users, ChevronRight } from "lucide-react";

const CourseInfo = ({ classRoomDetails }) => {
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
        <span className="text-gray-400">•</span>
        <button className="text-blue-500 hover:text-blue-600">
          Join Class Room
        </button>
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
