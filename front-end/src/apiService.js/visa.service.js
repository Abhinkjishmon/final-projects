import axiosInstance from "@/config/axiosInstance";
import apiEndpoints from "@/constants/apiEnd";

export const getPreviousChat = async () => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.visaAndImmigartion.previousChat
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const getResponseFromChatBoat = async (message) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.visaAndImmigartion.chat,
      message
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const checkEligibility = async (formData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.visaAndImmigartion.checkEligibility,
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
