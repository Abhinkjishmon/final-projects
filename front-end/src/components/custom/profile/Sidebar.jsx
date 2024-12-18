import React from "react";
import { Home, User, Image, Bell, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";

const menuItems = [
  { icon: Home, text: "Home", href: "/profile" },
  { icon: Image, text: "Jobs", href: "/profile/jobs" },
  { icon: User, text: "Accommodation", href: "/profile/accommodtions" },
  { icon: Image, text: "Class Rooms", href: "/profile/classRoom-Info" },
  { icon: Image, text: "Blogs", href: "/profile/blogs" },
  { icon: Bell, text: "Notifications", href: "/profile/notifications" },
  { icon: FaUserEdit, text: "Edit Profile", href: "/profile/edit-profile" },
  { icon: Settings, text: "Log Out", href: "/profile/jobs" },
];

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-900 text-white w-[250px] md:w-[80px] lg:w-[250px] p-4 fixed left-0 transition-all duration-300">
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
        />
        <div className="text-center md:hidden lg:block">
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-400 text-sm">john.doe@example.com</p>
        </div>
      </div>

      <nav>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>
                <a className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  <item.icon className="w-6 h-6" />
                  <span className="md:hidden lg:inline">{item.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
