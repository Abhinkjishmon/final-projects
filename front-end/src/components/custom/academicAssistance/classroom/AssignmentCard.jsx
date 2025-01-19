import React from "react";
import { Calendar, Award } from "lucide-react";
import { getLocalStorageItem } from "@/utils/localStorage";

function AssignmentCard({ assignment, onClick, isSubmited }) {
  const { userId } = getLocalStorageItem("user");
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    submitted: "bg-blue-100 text-blue-800",
    graded: "bg-green-100 text-green-800",
  };

  return (
    <div
      onClick={() => onClick(assignment.id)}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {assignment.title}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            isSubmited.some((data) => data.studentId === userId)
              ? "bg-blue-100 text-blue-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {isSubmited.some((data) => data.studentId === userId)
            ? "Submitted"
            : "Pending"}
        </span>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">
        {assignment.description}
      </p>

      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Award className="w-4 h-4" />
          <span>{assignment.points} points</span>
        </div>
      </div>
    </div>
  );
}

export default AssignmentCard;
