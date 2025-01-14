import { Rightbar, Sidebar } from "@/components/custom";

import React from "react";

function DailyTask() {
  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          
        </div>
      </main>
    </div>
  );
}

export default DailyTask;
