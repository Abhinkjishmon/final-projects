import React from "react";
import { BookOpen, Users, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { leaveClassRooms } from "@/apiService.js/acadamic.service";
import { toast } from "react-toastify";
import { deleteClassrooms } from "@/apiService.js/profile.service";

export function ClassCard({
  name,
  title,
  _id,
  participants,
  subject,
  coverVideo,
  activeTab,
  onDelete,
}) {
  const leaveClassroom = async (e) => {
    e.preventDefault();
    const response = await leaveClassRooms(_id);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      onDelete();
    }
  };
  const deleteClassroom = async (e) => {
    e.preventDefault();
    const response = await deleteClassrooms(_id);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      onDelete();
    }
  };

  return (
    <Link to={`/acadamic/class-room/${_id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src={coverVideo} className="h-24 w-full object-cover" alt="" />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <pn className="text-gray-600 mt-1">{name}</pn>
              <p className="text-gray-500 text-sm mt-2">{subject}</p>
            </div>
            {activeTab == "my-classes" ? (
              <button
                className="p-2 rounded-md bg-red-600 text-white hover:text-gray-700"
                onClick={deleteClassroom}
              >
                Delete
              </button>
            ) : (
              <button
                className="p-2 rounded-md bg-red-600 text-white hover:text-gray-700"
                onClick={leaveClassroom}
              >
                Leave
              </button>
            )}
          </div>
          <div className="flex items-center gap-4 mt-4 text-gray-600">
            <div className="flex items-center gap-1">
              <BookOpen size={16} />
              <span className="text-sm"> assignments</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span className="text-sm">{participants?.length} students</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ClassCard;
