import { CreateNewJob } from "@/apiService.js/job.service";
import { JobForm, JobPreview } from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const JobPostingForm = () => {
  const [previewData, setPreviewData] = useState(null);
  const navigate = useNavigate();
  const handleJobPost = async () => {
    const response = await CreateNewJob(previewData);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      navigate("/find-job");
    }
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {previewData ? (
        <JobPreview
          onPostjob={handleJobPost}
          job={previewData}
          onBack={() => setPreviewData(null)}
        />
      ) : (
        <JobForm onPreview={setPreviewData} />
      )}
    </div>
  );
};

export default JobPostingForm;
