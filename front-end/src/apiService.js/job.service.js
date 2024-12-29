import axiosInstance from "@/config/axiosInstance";
import apiEndpoints from "@/constants/apiEnd";

export const CreateNewJob = async (formData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.job.newJob,
      formData
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const getAllJobs = async (category) => {
  try {
    const { data } = await axiosInstance.get(apiEndpoints.job.getAll(category));
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const getJobWithSimilarJobs = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.job.getJobWithSimilarJobs(id)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const saveJob = async (id) => {
  try {
    const { data } = await axiosInstance.post(apiEndpoints.job.saveJob(id));
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const jobApplication = async (jobId, formData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.job.jobApplication(jobId),
      formData
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const getLatestJobs = async () => {
  try {
    const { data } = await axiosInstance.get(apiEndpoints.job.getLatestJobs);
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const featuredjobs = async () => {
  try {
    const { data } = await axiosInstance.post(apiEndpoints.job.featuredjobs);
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
