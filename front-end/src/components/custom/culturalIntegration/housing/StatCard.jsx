import React from "react";

const StatCard = ({ title, value, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h3 className="text-gray-600 text-sm uppercase">{title}</h3>
      <div className="text-3xl font-bold text-blue-600 my-2">{value}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default StatCard;
