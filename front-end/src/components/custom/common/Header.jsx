import React, { useEffect, useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLocalStorageItem } from "@/utils/localStorage";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const { userId, fullname, profileImg, username } =
    getLocalStorageItem("user");

  const menuItems = [
    { label: "Find Accommodations", href: "/find-accommodations" },
    { label: "Part Time Job", href: "/find-job" },
    { label: "Cultural Integration", href: "/culturalIntergretion" },
    { label: "Visa Assistance", href: "/visaImmigrationAssistance" },
    { label: "Academic", href: "/acadamic" },
  ];
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to={"/"}>
              <span className="text-2xl font-bold text-blue-600">Easy Way</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Link to={`/profile/${userId}`}>
            {userId ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">{username}</span>
                <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={profileImg}
                    alt={fullname}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Link to={"/signin"}>
                  <Button
                    variant="outline"
                    className="px-7 py-3 border-black  hover:bg-gray-100 rounded-full"
                  >
                    Log in
                  </Button>
                </Link>
              </div>
            )}
          </Link>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex space-x-4 px-2 pt-4 border-t">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <User className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
