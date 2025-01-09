import React from "react";
import { BookOpen } from "lucide-react";



const QuickGuide = ({ items }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-8">
      <div className="flex items-center mb-6">
        <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">
          Quick Housing Guide
        </h2>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickGuide;
