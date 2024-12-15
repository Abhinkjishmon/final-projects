import React from "react";
import  ClassCard  from "./ClassCard";

function ClassList({ title, classes }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <ClassCard key={classItem.id} {...classItem} />
        ))}
      </div>
    </div>
  );
}
export default ClassList