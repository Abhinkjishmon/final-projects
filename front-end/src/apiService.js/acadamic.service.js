import axiosInstance from "@/config/axiosInstance";
import apiEndpoints from "@/constants/apiEnd";

export const createNewClassRoom = async (formData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.acadamic.newClass,
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
export const getClassRooms = async () => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.acadamic.getAllClassRoom
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const getOneClassRooms = async (classroomId) => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.acadamic.getOneClass(classroomId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const joinClassRooms = async(classroomId) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.acadamic.joinClassRoom(classroomId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};