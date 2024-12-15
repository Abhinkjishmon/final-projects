import React from 'react';
import { GraduationCap, Plus } from 'lucide-react';
 function ClassroomHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-3">
        <GraduationCap className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">Classroom</h1>
      </div>
      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        <Plus size={20} />
        <span>Create Class</span>
      </button>
    </div>
  );
}
export default ClassroomHeader