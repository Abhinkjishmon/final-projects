

export const getStatusColor = (status) => {
  const colors = {
    pending: "bg-yellow-100 text-yellow-800",
    accepted: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
    interview: "bg-blue-100 text-blue-800",
  };
  return colors[status] || colors.pending;
};

export const filterJobs = (jobs, searchTerm) => {
  const term = searchTerm.toLowerCase();
  return jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(term) ||
      job.company.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term)
  );
};
