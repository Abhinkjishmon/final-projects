import {
  AssignmentCard,
  AssignmentDetails,
  CreateAssignmentForm,
  Rightbar,
  Sidebar,
} from "@/components/custom";
import React, { useEffect, useRef, useState } from "react";
import { PlusCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import {
  getAssignments,
  getOneClassRooms,
  isAssignmentSubmitted,
} from "@/apiService.js/acadamic.service";
import { getLocalStorageItem } from "@/utils/localStorage";

const Assignments = () => {
  const { id } = useParams();
  const { userId } = getLocalStorageItem("user");
  const [selectedAssignment, setSelectedAssignment] = useState();
  const [assignments, setAssignments] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [classRoomDetails, setClassRoom] = useState();
  const [classRoomCreatedBy, setclassRoomCreatedBy] = useState();
  const [submited, setSubmited] = useState();

  const handleAssignmentClick = (id) => {
    const assignment = assignments.find((a) => a.id === id);
    if (assignment) {
      setSelectedAssignment(assignment);
    }
  };

  const handleSubmit = () => {
    setSelectedAssignment(null);
  };

  const handleCreateAssignment = (newAssignment) => {
    const assignment = {
      ...newAssignment,
      id: (assignments.length + 1).toString(),
      status: "pending",
    };
    setAssignments([...assignments, assignment]);
    setShowCreateForm(false);
  };
  useEffect(() => {
    const fetchAllAssignments = async () => {
      const response = await getAssignments(id);
      const classDetails = await getOneClassRooms(id);
      const isSubmited = await isAssignmentSubmitted(id);
      setClassRoom(classDetails);
      setAssignments(response);
      setSubmited(isSubmited.submission);
      console.log(isSubmited.submission);
      setclassRoomCreatedBy(classDetails.createdBy._id);
    };
    fetchAllAssignments();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="min-h-screen bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Assignments</h1>
              {classRoomCreatedBy == userId ? (
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <PlusCircle className="w-5 h-5" />
                  Create Assignment
                </button>
              ) : (
                <></>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assignments?.map((assignment) => (
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                  onClick={handleAssignmentClick}
                  isSubmited={submited.filter(
                    (data) => data.id == assignment.id
                  )}
                />
              ))}
            </div>

            {selectedAssignment && (
              <AssignmentDetails
                assignment={selectedAssignment}
                onClose={() => setSelectedAssignment(null)}
                onSubmit={handleSubmit}
              />
            )}

            {showCreateForm && (
              <CreateAssignmentForm
                onSubmit={handleCreateAssignment}
                onClose={() => setShowCreateForm(false)}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Assignments;
