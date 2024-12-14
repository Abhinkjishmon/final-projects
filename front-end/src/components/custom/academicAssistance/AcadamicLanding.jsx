import React from "react";
import { ArrowRight } from "lucide-react";
import acadamicImg from "/images/acadamic.png";
import {
  FaBook,
  FaLaptop,
  FaGraduationCap,
  FaPaintBrush,
  FaLightbulb,
} from "react-icons/fa";
function AcadamicLanding() {
  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto md:px-40 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hello Friends
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              I Am Sofia And We Want To Start
              <br />A Web Design Course Together.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Do You Like It Too 😊?
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Start Course Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Image with Background Circle */}
          <div className="relative flex justify-end items-center bg-[#E671E5] rounded-full">
            <div className="absolute w-96 h-96 bg-blue-100 rounded-full blur-lg -z-10"></div>
            <img
              src={acadamicImg}
              alt="Sofia studying on laptop"
              className="w-full max-w-md rounded-3xl  z-10"
            />
          </div>
        </div>

        {/* Floating Icons and Text around Image */}
        <div className="absolute top-5 left-10 text-blue-500 text-3xl animate-bounce">
          <FaLaptop />
        </div>
        <div className="absolute bottom-10 right-20 text-red-400 text-4xl animate-pulse">
          <FaBook />
        </div>
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-green-500 text-xl bg-green-100 px-2 py-1 rounded-full shadow-md animate-spin-slow">
          "Learn Web Design!"
        </div>
        <div className="absolute bottom-20 left-1/4 text-purple-500 text-lg bg-purple-100 px-3 py-1 rounded shadow-lg animate-pulse">
          "Start Today!"
        </div>
        <div className="absolute top-16 right-40 text-yellow-500 text-4xl animate-bounce">
          <FaGraduationCap />
        </div>
        <div className="absolute bottom-1/3 right-10 text-orange-400 text-sm bg-orange-100 px-2 py-1 rounded-lg shadow-md">
          "Grow Skills!"
        </div>
        <div className="absolute bottom-28 right-1/4 text-cyan-400 text-base bg-cyan-100 px-3 py-2 rounded-lg shadow-lg animate-pulse">
          "Join Us Now!"
        </div>
        <div className="absolute top-40 left-1/5 text-pink-500 text-5xl">
          <FaPaintBrush />
        </div>
        <div className="absolute top-10 right-5 text-teal-600 text-lg bg-teal-100 px-4 py-2 rounded-full shadow-sm animate-bounce">
          "Start Creating!"
        </div>
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 text-indigo-500 text-4xl ">
          <FaLightbulb />
        </div>
        <div className="absolute top-2/3 left-12 text-gray-600 text-sm bg-gray-200 px-3 py-1 rounded-full shadow-md">
          "Inspire Yourself!"
        </div>
      </div>
    </>
  );
}

export default AcadamicLanding;
