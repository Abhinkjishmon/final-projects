import React from "react";
import { Calendar, Clock, User } from "lucide-react";

function AppointmentCard({ appointment }) {
  const { date, time, status, guestName } = appointment;

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-3">
          <User className="w-5 h-5 text-gray-500" />
          <span className="font-medium text-gray-900">{guestName}</span>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
      <div className="flex items-center space-x-4 text-gray-600">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCard;
