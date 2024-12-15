import React, { useState } from "react";
import AppliedJobs from "./AppliedJobs";
import CreatedJobs from "./CreatedJobs";
import WishlistJobs from "./WishlistJobs";
import TabButton from "./TabButton";

function JobTabs() {
  const [activeTab, setActiveTab] = useState("applied");

  const tabs = ["applied", "created", "wishlist"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              tab={tab}
              activeTab={activeTab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === "applied" && <AppliedJobs />}
        {activeTab === "created" && <CreatedJobs />}
        {activeTab === "wishlist" && <WishlistJobs />}
      </div>
    </div>
  );
}
export default JobTabs;
