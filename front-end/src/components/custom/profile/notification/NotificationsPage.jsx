import React, { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import NotificationItem from "./NotificationItem";
import { getNotifications } from "@/apiService.js/notification.service";
import { getLocalStorageItem } from "@/utils/localStorage";

function NotificationsPage() {
  const mockNotifications = [
    {
      id: "1",
      title: "New Application Received",
      message: "John Doe has applied for Senior Frontend Developer position",
      timestamp: "2024-03-15T10:30:00Z",
      isRead: false,
    },
    {
      id: "2",
      title: "System Maintenance",
      message: "Scheduled maintenance will occur on March 20th at 2:00 AM UTC",
      timestamp: "2024-03-14T15:45:00Z",
      isRead: true,
    },
    {
      id: "3",
      title: "Message from HR",
      message:
        "Please review the updated interview guidelines for technical positions",
      timestamp: "2024-03-13T09:15:00Z",
      isRead: false,
    },
  ];
  const [notification, setNotification] = useState([]);
  const [unreadMessage, setUnreadMessage] = useState();
  const unreadCount = mockNotifications.filter((n) => !n.isRead).length;
  useEffect(() => {
    const fetchNotification = async () => {
      const response = await getNotifications();
      setNotification(response.notifications);
      const unreadCount = response.notifications.filter(
        (notification) => !notification.read
      ).length;
      setUnreadMessage(unreadCount);
    };
    fetchNotification();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">
                Notifications
              </h1>
            </div>
            {unreadCount > 0 && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {unreadMessage} unread
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {notification && notification.length > 0 ? (
            notification.map((notificationItem) => (
              <NotificationItem
                key={notificationItem.id}
                notification={notificationItem}
              />
            ))
          ) : (
            <p>No notifications</p>
          )}
        </div>
      </main>
    </div>
  );
}
export default NotificationsPage;
