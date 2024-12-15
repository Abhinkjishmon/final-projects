import React from "react";
import { MapPin, Link as LinkIcon, Twitter, Github } from "lucide-react";

function ProfileInfo() {
  return (
    <div className="max-w-5xl mx-auto my-9 px-4 sm:px-6 lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-600">
              Passionate software engineer with over 8 years of experience
              building scalable web applications. Focused on creating elegant
              solutions to complex problems while maintaining code quality and
              performance. Strong advocate for clean code and best practices.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-4">
              Experience
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Senior Software Engineer
                </h3>
                <p className="text-gray-600">TechCorp Inc. • 2020 - Present</p>
                <p className="text-gray-600 mt-2">
                  Lead development of core platform features and mentored junior
                  developers. Implemented microservices architecture that
                  improved system scalability by 300%.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Software Engineer
                </h3>
                <p className="text-gray-600">Innovation Labs • 2018 - 2020</p>
                <p className="text-gray-600 mt-2">
                  Developed and maintained multiple client-facing applications.
                  Reduced application load time by 60% through optimization
                  techniques.
                </p>
              </div>
            </div>
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
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <LinkIcon className="h-5 w-5" />
                <a href="#" className="text-blue-500 hover:underline">
                  portfolio.dev
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Twitter className="h-5 w-5" />
                <a href="#" className="text-blue-500 hover:underline">
                  @sarahdev
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Github className="h-5 w-5" />
                <a href="#" className="text-blue-500 hover:underline">
                  sarah-anderson
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Python",
                "AWS",
                "Docker",
                "GraphQL",
                "PostgreSQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
