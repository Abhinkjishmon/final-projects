import axiosInstance from "@/config/axiosInstance";
import apiEndpoints from "@/constants/apiEnd";

export const getNotifications = async () => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.notifications.getNotifications
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
