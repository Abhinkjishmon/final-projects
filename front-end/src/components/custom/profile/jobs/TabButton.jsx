import React from "react";

function TabButton({ tab, activeTab, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
        ${
          activeTab === tab
            ? "border-blue-500 text-blue-600"
            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
        }
      `}
    >
      {tab.charAt(0).toUpperCase() + tab.slice(1)} Jobs
    </button>
  );
}
export default TabButton;
