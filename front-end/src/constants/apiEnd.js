const apiEndpoints = {
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    getUser: (userId) => `/auth/user/${userId}`,
    updateUser: (userId) => `/auth/update/${userId}`,
  },
  job: {
    newJob: "/jobs/new-job",
    getAll: (category) => `/jobs/all?category=${category}`,
    getJobWithSimilarJobs: (id) => `/jobs/${id}`,
    saveJob: (jobId) => `/jobs/save/${jobId}`,
    jobApplication: (jobId) => `/jobs/applications/${jobId}`,
    getLatestJobs: "/jobs/latest",
    featuredjobs: "/jobs/featured-jobs",
    search: (title, location) =>
      `/jobs/search?title=${title}&location=${location}`,
  },
  accommodation: {
    newAccommodation: "/accommodation/new-accommodations",
    getAll: "/accommodation/get-all",
    addWishList: (accommodationId) =>
      `/accommodation/wishlist/add/${accommodationId}`,
    removeWishList: (accommodationId) =>
      `/accommodation/wishlist/remove/${accommodationId}`,
    getAccommodation: (accommodationId) =>
      `/accommodation/get-accommodations/${accommodationId}/details`,
    appointments: "/accommodation/appointments",
    search: (query) => `/accommodation/search/?query=${query}`,
  },
  culturalIntergretion: {
    newBlogs: "/culturalfit/new-blogs",
    getBlogs: (category) => `/culturalfit/blogs?category=${category}`,
    getOneBlogs: (id) => `/culturalfit/blogs/${id}`,
    getFeaturedBlogs: `/culturalfit/featured-blogs`,
  },
  event: {
    newEvent: "/culturalfit/add-event",
    getAllEvents: "/culturalfit/events",
  },
  visaAndImmigartion: {
    chat: "/visaAndImmigartions/chat-assist",
    previousChat: "/visaAndImmigartions/get-chat",
    checkEligibility: "/visaAndImmigartions/check-eligibility",
  },
  academic: {
    newClass: "/acadamic/new-classroom",
    getAllClassRoom: "/acadamic/classrooms",
    getOneClass: (classroomId) => `/acadamic/classrooms/${classroomId}`,
    joinClassRoom: (classroomId) => `/acadamic/classrooms/${classroomId}/join`,
    leaveClassRoom: (classroomId) =>
      `/acadamic/classrooms/${classroomId}/leave`,
    newStudyResources: (classroomId) =>
      `/acadamic/classrooms/${classroomId}/study-material`,
    StudyResources: (classroomId) =>
      `/acadamic/classrooms/${classroomId}/study-materials`,
    createAssignment: "/acadamic/assignments",
    getAssignments: (classroomId) => `/acadamic/assignments/${classroomId}`,
    updateAssignment: "/acadamic/assignments",
    deleteAssignment: () => `/acadamic/assignments`,
    assignmentSubmit: "/acadamic/assignments/submit",
    assignmentSubmitted: (classroomId) =>
      `/acadamic/assignments/isAssignmentSubmitted/${classroomId}`,
    academicAIchat: "/acadamic/classrooms/AIChat",
    academicAIPreviouschat: "/acadamic/previouschat",
    addLiveSessions: (classroomId) => `/acadamic/createlive/${classroomId}`,
    getLiveSession: (classroomId) => `/acadamic/get-live/${classroomId}`,
    groupChats: (classroomId) =>
      `/acadamic/classroom/group-chat/${classroomId}`,
  },
  profile: {
    getUserBlogs: "/culturalfit/user/blogs",
    getAppliedJob: "/jobs/applied",
    getCreatedJobs: "/jobs/user",
    deleteJob: (jobId) => `/jobs/${jobId}`,
    getApplicationOFJob: (jobId) => `/jobs/applications/${jobId}`,
    updateApplicationStatus: (applicationId) =>
      `/jobs/update-status/${applicationId}`,
    getUserCreatedAccomodation: "/accommodation/get-user-accommodation",
    deleteAccomodation: (id) => `/accommodation/delete-accommodations/${id}`,
    getWhishlist: `/accommodation/get-whishlist`,
    getAppointment: `/accommodation/user/accommodation-appointments`,
    updateAppointment: (appointmentId) =>
      `/accommodation/appointments/${appointmentId}`,
    getCreatedClassRoom: "acadamic/user/classrooms",
    getJoinedClassroom: "/acadamic/user/participant-classrooms",
    deleteClassroom: (classroomId) => `/acadamic/classrooms/${classroomId}`,
    getSavedJobs: "/jobs/get-saved",
    removeSavedJob: (jobId) => `/jobs/remove-saved/${jobId}`,
  },
  liveNews: {
    getLiveNews: `https://newsdata.io/api/1/latest?apikey=pub_50304e39cfbce9f3f75e11b4b7906c0d2e3c8&country=gb`,
  },
  notifications: {
    getNotifications: "/notifications",
  },
};

export default apiEndpoints;
