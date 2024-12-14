import React from "react";
import { Clock, Users, ChevronRight } from "lucide-react";

const CourseInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-2">
        Creating Beautiful Landing Page in 1 Hour
      </h1>
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Mentor"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-600">Geo Vanni</span>
        </div>
        <span className="text-gray-400">•</span>
        <span className="text-gray-600">Interface, Experience</span>
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
            <div className="min-h-screen bg-gray-50 p-6">
              <header className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                  Course Overview
                </h1>
                <p className="text-gray-600 mt-2">
                  Learn why this course stands out and what it covers.
                </p>
              </header>
              <div className="max-w-5xl mx-auto space-y-10">
                <section className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    This course is designed to provide you with a solid
                    understanding of the fundamentals, advanced concepts, and
                    industry best practices. With a focus on real-world
                    applications, you’ll learn not just the "what," but also the
                    "why" and "how."
                  </p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Why is this best?
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Expert instructors with real-world experience.</li>
                    <li>Comprehensive and up-to-date curriculum.</li>
                    <li>Hands-on projects to enhance practical skills.</li>
                    <li>Flexible learning schedules and support.</li>
                  </ul>
                </section>

                <section className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    What is Cover/Syllabus?
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                      <h3 className="font-bold text-gray-800">
                        Module 1: Introduction
                      </h3>
                      <p className="text-gray-700">
                        Overview of the course, key concepts, and objectives.
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                      <h3 className="font-bold text-gray-800">
                        Module 2: Intermediate Topics
                      </h3>
                      <p className="text-gray-700">
                        Deep dive into more complex subjects with practical
                        examples.
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                      <h3 className="font-bold text-gray-800">
                        Module 3: Advanced Applications
                      </h3>
                      <p className="text-gray-700">
                        Hands-on projects and case studies to reinforce
                        learning.
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                      <h3 className="font-bold text-gray-800">
                        Module 3: Advanced Applications
                      </h3>
                      <p className="text-gray-700">
                        Hands-on projects and case studies to reinforce
                        learning.
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                      <h3 className="font-bold text-gray-800">
                        Module 3: Advanced Applications
                      </h3>
                      <p className="text-gray-700">
                        Hands-on projects and case studies to reinforce
                        learning.
                      </p>
                    </div>
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
