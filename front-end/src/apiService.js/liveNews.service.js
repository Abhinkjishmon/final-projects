import axiosInstance from "@/config/axiosInstance";
import apiEndpoints from "@/constants/apiEnd";
import axios from "axios";

export const getLiveNews = async () => {
  try {
    const { data } = await axios.get(apiEndpoints.liveNews.getLiveNews);
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
