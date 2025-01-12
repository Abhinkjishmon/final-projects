import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Pin,
  ChevronDown,
  ChevronUp,
  Users,
  Clock,
} from "lucide-react";

function EventCard({ event }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="group relative">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform z-20">
        <Pin className="h-8 w-8 text-teal-500 rotate-45 drop-shadow-lg" />
      </div>

      <div
        className={`relative z-10 bg-white rounded-lg p-4 shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] cursor-pointer ${
          isExpanded ? "scale-[1.02]" : "hover:scale-[1.02]"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex gap-4">
          <div
            className={`${
              isExpanded ? "w-1/3" : "w-1/4"
            } flex-shrink-0 transition-all duration-300`}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
              <img
                src={event?.poster}
                alt={event?.title}
                className="h-full w-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 font-serif mb-1">
                  {event?.title}
                </h3>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <p
                className={`text-gray-600 text-sm ${
                  isExpanded ? "" : "line-clamp-2"
                }`}
              >
                {event?.description}
              </p>
            </div>

            <div className="flex gap-4 text-gray-500 text-sm mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-teal-500" />
                <span className="font-medium">{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span className="font-medium">{event.location}</span>
              </div>
            </div>
            {isExpanded && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-teal-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Capacity
                      </p>
                      <p className="text-sm text-gray-600">{event?.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Duration
                      </p>
                      <p className="text-sm text-gray-600">
                        {event?.duration}H
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Additional Information
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>•{event?.addtionalInfo}</li>
                  </ul>
                </div>
                <button className="w-full bg-teal-500 text-white rounded-lg py-2 font-medium hover:bg-teal-600 transition-colors">
                  Register for Event
                </button>
              </div>
            )}

            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
              <img
                src={event?.createdBy?.profileImg}
                alt={event?.createdBy?.fullname}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-teal-500"
              />
              <div>
                <p className="font-bold text-gray-900 text-sm">
                  {event?.createdBy?.fullname}
                </p>
                <p className="text-xs text-teal-500 font-medium"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventCard;
