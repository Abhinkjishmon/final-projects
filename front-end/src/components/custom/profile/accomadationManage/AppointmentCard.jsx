import React, { useState } from "react";
import { Calendar, Clock, User } from "lucide-react";
import {
  Phone,
  Building2,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Clock3,
} from "lucide-react";
import { updateAppointments } from "@/apiService.js/profile.service";
import { toast } from "react-toastify";

function AppointmentCard({ appointment }) {
  const [status, setStatus] = useState(appointment.status);

  const handleStatusChange = async (newStatus) => {
    setStatus(newStatus);
    const response = await updateAppointments(appointment._id, {
      status: newStatus,
    });
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      closeDialog();
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl w-full">
        <div className="p-6 space-y-6">
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-gray-700">Property</h2>
              <p className="text-gray-600">
                {appointment.accommodationId.title}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-gray-700">Date</h2>
                <p className="text-gray-600">{formatDate(appointment.date)}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-gray-700">Time</h2>
                <p className="text-gray-600">{appointment.time}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-gray-700">Phone Number</h2>
                <p className="text-gray-600">{appointment.phoneNumber}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-gray-700">
                  Special Requests
                </h2>
                <p className="text-gray-600">
                  {appointment.specialRequests || "None"}
                </p>
              </div>
            </div>
          </div>
          <div className="border-t pt-6">
            <div className="items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock3 className="w-5 h-5 text-blue-600" />
                <span className="font-semibold py-3 text-gray-700">
                  Current Status:
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    status
                  )}`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleStatusChange("approved")}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Approve
                </button>
                <button
                  onClick={() => handleStatusChange("rejected")}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <XCircle className="w-4 h-4" />
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCard;
