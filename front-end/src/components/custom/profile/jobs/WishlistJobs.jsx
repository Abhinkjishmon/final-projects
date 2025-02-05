import React, { useEffect, useState } from "react";
// import SearchBar from "./SearchBar";
import { filterJobs } from "@/utils/jobs";
import JobCardProps from "./JobCardProps";
import { getSavedJobsByUser } from "@/apiService.js/profile.service";

const mockWishlistJobs = [
  {
    id: "1",
    title: "Senior Product Designer",
    company: "Design Studio Co.",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$140k - $180k",
    description: "Join our creative team as a Senior Product Designer...",
    requirements: ["8+ years experience", "UI/UX", "Design Systems"],
    postedDate: "2024-03-15",
    isWishlisted: true,
  },
  {
    id: "2",
    title: "Technical Lead",
    company: "Innovation Hub",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$160k - $200k",
    description:
      "Looking for a technical lead to drive our engineering efforts...",
    requirements: ["10+ years experience", "Team Leadership", "Architecture"],
    postedDate: "2024-03-14",
    isWishlisted: true,
  },
];

function WishlistJobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredJobs = filterJobs(mockWishlistJobs, searchTerm);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      const response = await getSavedJobsByUser();
      console.log(response);
      setSavedJobs(response.savedJobs);
    };
    fetchSavedJobs();
  }, []);
  const handleRemoveFromWishlist = (jobId) => {};

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Wishlist Jobs</h2>
      </div>

      {savedJobs?.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No wishlisted jobs found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {savedJobs?.map((job) => (
            <JobCardProps
              key={job.id}
              job={job}
              type="wishlist"
              onAction={(action) => {
                if (action === "remove") {
                  handleRemoveFromWishlist(job.id);
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default WishlistJobs;
