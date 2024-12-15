import { formatTimestamp } from "@/utils/date";
import React from "react";

function NotificationItem({ notification }) {
  const { title, message, timestamp, isRead } = notification;

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        {!isRead && (
          <div className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0" />
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-1">{message}</p>
          <span className="text-sm text-gray-500 mt-2 block">
            {formatTimestamp(timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default NotificationItem;
