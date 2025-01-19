import axiosInstance from "@/config/axiosInstance";
import apiEndpoints from "@/constants/apiEnd";

export const createNewClassRoom = async (formData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.academic.newClass,
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
      apiEndpoints.academic.getAllClassRoom
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
      apiEndpoints.academic.getOneClass(classroomId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};
export const joinClassRooms = async (classroomId) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.academic.joinClassRoom(classroomId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const leaveClassRooms = async (classroomId) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.academic.leaveClassRoom(classroomId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const addStudyMeaterial = async (classroomId, formData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.academic.newStudyResources(classroomId),
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

export const getStudyMeaterial = async (classroomId) => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.academic.StudyResources(classroomId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const createAssignment = async (assignmentData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.academic.createAssignment,
      assignmentData
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILED", message };
  }
};

export const getAssignments = async (classroomId) => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.academic.getAssignments(classroomId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILED", message };
  }
};

export const updateAssignment = async (assignmentId, updatedData) => {
  try {
    const { data } = await axiosInstance.put(
      apiEndpoints.academic.updateAssignment(assignmentId),
      updatedData
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILED", message };
  }
};
export const deleteAssignment = async (assignmentId) => {
  try {
    const { data } = await axiosInstance.delete(
      apiEndpoints.academic.deleteAssignment(assignmentId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILED", message };
  }
};

export const submitAssignments = async (assignmentData) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.academic.assignmentSubmit,
      assignmentData
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILED", message };
  }
};

export const isAssignmentSubmitted = async (classroomId) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.academic.assignmentSubmitted(classroomId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const academicChatBoat = async (message) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.academic.academicAIchat,
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

export const academicPreviouschat = async () => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.academic.academicAIPreviouschat
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const getLiveSessions = async (classroomId) => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.academic.getLiveSession(classroomId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

export const createLiveSessions = async (formData, classroomId) => {
  try {
    const { data } = await axiosInstance.post(
      apiEndpoints.academic.addLiveSessions(classroomId),
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

export const getGroupChats = async (classroomId) => {
  try {
    const { data } = await axiosInstance.get(
      apiEndpoints.academic.groupChats(classroomId)
    );
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return { status: "FAILD", message };
  }
};

