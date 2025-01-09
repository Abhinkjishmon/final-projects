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

export const getBlogsByCategory = async (category) => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.culturalIntergretion.getBlogs(category)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const getOneBlogs = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.culturalIntergretion.getOneBlogs(id)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  } 
};

export const getFeaturedBlogs = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.culturalIntergretion.getFeaturedBlogs
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
