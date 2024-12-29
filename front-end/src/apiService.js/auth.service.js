import axiosInstance from "@/config/axiosInstance";
import apiEndpoints from "@/constants/apiEnd";

export const fetchServer = async () => {
  try {
    const data = await axiosInstance.get("/");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (formData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.auth.register,
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


export const login = async (formData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.auth.login,
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
export const getUserInfo = async (userId) => {
  try {
    const { data } = await axiosInstance.get(apiEndpoints.auth.getUser(userId));
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const updateUserInfo = async (userId, formData) => {
  
  try {
    const { data } = await axiosInstance.put(
      apiEndpoints.auth.updateUser(userId),
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
