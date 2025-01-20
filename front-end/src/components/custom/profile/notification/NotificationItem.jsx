import { formatTimestamp } from "@/utils/date";
import React from "react";
import { Link } from "react-router-dom";

function NotificationItem({ notification }) {
  console.log(notification);
  const { description, message, createdAt, isRead, receiverId } = notification;

  return (
    <Link to={`/profile/${receiverId}/accommodtions`}>
      <div className="p-4 m-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start gap-3">
          {!isRead && (
            <div className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0" />
          )}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{message}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
            <span className="text-sm text-gray-500 mt-2 block">
              {formatTimestamp(createdAt)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NotificationItem;
