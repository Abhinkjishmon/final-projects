import axiosInstance from "@/config/axiosInstance";
import apiEndpoints from "@/constants/apiEnd";

export const createNewBlog = async (formData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.culturalIntergretion.newBlogs,
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
