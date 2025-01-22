import axiosInstance from "@/config/axiosInstance";
import apiEndpoints from "@/constants/apiEnd";

export const getUserBlog = async () => {
  try {
    const { data } = await axiosInstance.get(apiEndpoints.profile.getUserBlogs);
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const getAppliedJobByUser = async () => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.profile.getAppliedJob
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const jobCreatedByUser = async () => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.profile.getCreatedJobs
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const deleteJob = async (jobId) => {
  try {
    const { data } = await axiosInstance.delete(
      apiEndpoints.profile.deleteJob(jobId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const getApplicationsOfaJob = async (jobId) => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.profile.getApplicationOFJob(jobId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const changeApplicationStatus = async (applicationId, status) => {
  try {
    const { data } = await axiosInstance.put(
      apiEndpoints.profile.updateApplicationStatus(applicationId),
      status
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const getAccomodation = async () => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.profile.getUserCreatedAccomodation
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const deleteAccomodation = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      apiEndpoints.profile.deleteAccomodation(id)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const getWhishlistAccomodation = async (id) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.profile.getWhishlist
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const getAppointments = async (id) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.profile.getAppointment
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const updateAppointments = async (id, status) => {
  try {
    const { data } = await axiosInstance.put(
      apiEndpoints.profile.updateAppointment(id),
      status
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const getClassrooms = async () => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.profile.getCreatedClassRoom
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const getJoinedClassrooms = async () => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.profile.getJoinedClassroom
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const deleteClassrooms = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      apiEndpoints.profile.deleteClassroom(id)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const getSavedJobsByUser = async () => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.profile.getSavedJobs
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
