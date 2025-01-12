import React from "react";
import { FaHome, FaUserAlt, FaCog, FaSignOutAlt } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { CiChat1 } from "react-icons/ci";
import {
  MdOutlineTaskAlt,
  MdOutlineAssignment,
  MdLiveTv,
  MdOutlineGrain,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {
  const { id } = useParams();
  const menuItems = [
    { name: "Home", icon: <FaHome />, href: `/acadamic/class-room/${id}` },
    {
      name: "Resources",
      icon: <GrResources />,
      href: `/acadamic/class-room/${id}/resources`,
    },
    {
      name: "Chats",
      icon: <CiChat1 />,
      href: `/acadamic/class-room/${id}/chats`,
    },
    {
      name: "Daily task",
      icon: <MdOutlineTaskAlt />,
      href: `/acadamic/class-room/${id}/daily-task`,
    },
    {
      name: "Assignments",
      icon: <MdOutlineAssignment />,
      href: `/acadamic/class-room/${id}/assignments`,
    },
    {
      name: "Live Class",
      icon: <MdLiveTv />,
      href: `/acadamic/class-room/${id}/live-class`,
    },
    {
      name: "Ai assistant",
      icon: <MdOutlineGrain />,
      href: `/acadamic/class-room/${id}/ai-assistant`,
    },
  ];

  return (
    <aside
      className="h-screen shadow-lg border-r-2 text-white flex flex-col items-center transition-all duration-300 
                 md:w-64 w-16"
    >
      <nav className="flex-1 w-full">
        <ul className="mt-4 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="group">
              <Link to={item.href}>
                <a className="flex items-center gap-4 px-4 py-2 text-blue-500 rounded-md transition-colors">
                  <div className="text-xl">{item.icon}</div>
                  <span className="md:block hidden transition-opacity duration-300">
                    {item.name}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
