import React from "react";

const AuthorInfo = ({ name, image, date, readTime }) => {
  return (
    <div className="flex items-center space-x-4 mb-8">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="font-medium text-gray-900">{name}</h3>
        <div className="text-sm text-gray-500">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
