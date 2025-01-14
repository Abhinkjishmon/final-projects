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
  acadamic: {
    newClass: "/acadamic/new-classroom",
    getAllClassRoom: "/acadamic/classrooms",
    getOneClass: (classroomId) => `/acadamic/classrooms/${classroomId}`,
    joinClassRoom: (classroomId) => `/acadamic/classrooms/${classroomId}/join`,
    getClassRoomDetails: () => `/classrooms/${classroomId}`,
  },
  liveNews: {
    getLiveNews: `https://newsdata.io/api/1/latest?apikey=pub_50304e39cfbce9f3f75e11b4b7906c0d2e3c8&country=gb`,
  },
};

export default apiEndpoints;
