import axiosInstance from "@/config/axiosInstance";
import apiEndpoints from "@/constants/apiEnd";

export const createNewAccommodation = async (formData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.accommodation.newAccommodation,
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
export const getAllAccommodation = async () => {
  try {
    const { data } = await axiosInstance.get(apiEndpoints.accommodation.getAll);
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const getAccommodation = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.accommodation.getAccommodation(id)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const wishlistAccommodation = async (accommodationId) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.accommodation.addWishList(accommodationId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const removeWishlistAccommodation = async (accommodationId) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.accommodation.removeWishList(accommodationId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const takeAppointments = async (formData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.accommodation.appointments,
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

export const searchAccommodations = async (query) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.accommodation.search(query)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
