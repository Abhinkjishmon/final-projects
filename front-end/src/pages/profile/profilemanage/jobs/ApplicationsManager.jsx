import React, { useState } from "react";
import { FileText } from "lucide-react";
import ApplicationDetail from "./ApplicationDetail";
import ApplicationList from "./ApplicationList";

function ApplicationsManager() {
  const mockApplications = [
    {
      id: "1",
      applicantName: "John Doe",
      position: "Senior Frontend Developer",
      appliedDate: "2024-03-15",
      status: "pending",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      resumeUrl: "https://www.africau.edu/images/default/sample.pdf",
      resumeType: "pdf",
      experience: 5,
      coverLetter: "I am excited to apply for this position...",
    },
    {
      id: "2",
      applicantName: "Jane Smith",
      position: "UX Designer",
      appliedDate: "2024-03-14",
      status: "interviewed",
      email: "jane.smith@example.com",
      phone: "+1 (555) 987-6543",
      resumeUrl: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46",
      resumeType: "image",
      experience: 3,
      coverLetter: "With my background in user experience design...",
    },
    {
      id: "3",
      applicantName: "Mike Johnson",
      position: "Backend Developer",
      appliedDate: "2024-03-13",
      status: "reviewed",
      email: "mike.johnson@example.com",
      phone: "+1 (555) 456-7890",
      resumeUrl: "https://example.com/resumes/mike-johnson-resume.doc",
      resumeType: "doc",
      experience: 4,
      coverLetter: "I bring extensive experience in backend development...",
    },
  ];
  const [selectedApplication, setSelectedApplication] = useState();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <FileText className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">
              Applications Manager
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {selectedApplication ? (
          <ApplicationDetail
            application={selectedApplication}
            onBack={() => setSelectedApplication(null)}
          />
        ) : (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Applications
              </h2>
              <p className="mt-1 text-gray-600">
                Review and manage all job applications
              </p>
            </div>
            <ApplicationList
              applications={mockApplications}
              onSelectApplication={setSelectedApplication}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default ApplicationsManager;
