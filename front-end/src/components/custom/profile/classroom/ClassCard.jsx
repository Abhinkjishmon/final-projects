import React from "react";
import { BookOpen, Users, MoreVertical } from "lucide-react";

export function ClassCard({ name, teacher, subject, students }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 mt-1">{teacher}</p>
            <p className="text-gray-500 text-sm mt-2">{subject}</p>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreVertical size={20} />
          </button>
        </div>
        <div className="flex items-center gap-4 mt-4 text-gray-600">
          <div className="flex items-center gap-1">
            <BookOpen size={16} />
            <span className="text-sm">5 assignments</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span className="text-sm">{students} students</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClassCard;
