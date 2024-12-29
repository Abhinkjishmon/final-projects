import React, { useEffect } from "react";
import { Home, User, Image, Bell, Settings } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "@/redux/userInfoSlice";

const Sidebar = () => {
  const { profileInfo } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserProfile(id));
  }, []);
  const menuItems = [
    { icon: Home, text: "Home", href: "" },
    { icon: Image, text: "Jobs", href: "/jobs" },
    { icon: User, text: "Accommodation", href: "/accommodtions" },
    { icon: Image, text: "Class Rooms", href: "/classRoom-Info" },
    { icon: Image, text: "Blogs", href: "/blogs" },
    { icon: Bell, text: "Notifications", href: "/notifications" },
  ];
  const user = useSelector((state) => state.user.user);
  const isUserOwnedProfile = () => {
    if (profileInfo?._id === user.userId) {
      return [
        ...menuItems,
        {
          icon: FaUserEdit,
          text: "Edit Profile",
          href: "/edit-profile",
        },
        { icon: Settings, text: "Log Out", href: "/logout" },
      ];
    }
    return menuItems;
  };

  return (
    <div className="h-screen bg-gray-900 text-white w-[250px] md:w-[80px] lg:w-[250px] p-4 fixed left-0 transition-all duration-300">
      <div className="flex flex-col items-center mb-8">
        <img
          src={profileInfo?.profileImg}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
        />
        <div className="text-center md:hidden lg:block">
          <h2 className="text-xl font-bold">{profileInfo?.username}</h2>
          <p className="text-gray-400 text-sm">{profileInfo?.email}</p>
        </div>
      </div>

      <nav>
        <ul className="space-y-4">
          {isUserOwnedProfile().map((item, index) => (
            <li key={index}>
              <Link to={`/profile/${profileInfo?._id}${item.href}`}>
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
