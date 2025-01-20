import { Rightbar, Sidebar, Spinner } from "@/components/custom";
import React, { useEffect, useRef, useState } from "react";
import { Play, X, Users, Calendar, Plus } from "lucide-react";
import {
  createLiveSessions,
  getLiveSessions,
} from "@/apiService.js/acadamic.service";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { formatDate } from "@/utils/date";

function LiveClass() {
  const { id } = useParams();
  const [liveSessions, setLiveSessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newSession, setNewSession] = useState({
    date: new Date().toISOString().split("T")[0],
    viewers: 0,
  });
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const fileInputRef = useRef(null);

  const handleThumbnailChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setThumbnailPreview(imageUrl);
      setNewSession({ ...newSession, thumbnail: imageUrl });
    }
  };

  const handleCreateSession = async (e) => {
    e.preventDefault();
    const session = {
      id: Date.now().toString(),
      title: newSession.title || "",
      description: newSession.description || "",
      thumbnail: newSession.thumbnail,
      videoId: newSession.videoId || "",
      instructor: newSession.instructor || "",
      date: newSession.date || new Date().toISOString().split("T")[0],
      viewers: newSession.viewers || 0,
    };

    const formData = new FormData();
    formData.append("title", newSession.title || "");
    formData.append("description", newSession.description || "");
    formData.append("videoId", newSession.videoId || "");
    formData.append("instructor", newSession.instructor || "");
    formData.append(
      "date",
      newSession.date || new Date().toISOString().split("T")[0]
    );
    if (fileInputRef.current && fileInputRef.current.files[0]) {
      formData.append("thumbnail", fileInputRef.current.files[0]);
    }
    setLoading(true);
    const response = await createLiveSessions(formData, id);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
      setLoading(false);
    } else {
      toast.success(response.message);
      setLoading(false);
      setShowCreateForm(false);
    }

    setNewSession({
      date: new Date().toISOString().split("T")[0],
      viewers: 0,
    });
    setThumbnailPreview("");
  };
  useEffect(() => {
    const getLive = async () => {
      const response = await getLiveSessions(id);
      setLiveSessions(response.data);
    };
    getLive();
  }, [loading]);

  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Live Sessions
              </h1>
              <button
                onClick={() => setShowCreateForm(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Plus size={20} />
                Create Live Session
              </button>
            </div>
          </header>
          <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {liveSessions?.map((session) => (
                <div
                  key={session.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
                >
                  <div className="relative h-48">
                    <img
                      src={session.thumbnail}
                      alt={session.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {session.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {session.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {formatDate(session.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        {session.viewers}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedVideo(session)}
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Play size={18} />
                      Join Live Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
          {selectedVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg w-full max-w-4xl">
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    {selectedVideo.title}
                  </h3>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${selectedVideo.videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    Instructor: {selectedVideo.instructor}
                  </p>
                </div>
              </div>
            </div>
          )}
          {showCreateForm && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg w-full max-w-2xl">
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Create New Live Session
                  </h3>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>
                <form onSubmit={handleCreateSession} className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={newSession.title || ""}
                        onChange={(e) =>
                          setNewSession({
                            ...newSession,
                            title: e.target.value,
                          })
                        }
                        className="mt-1 border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        value={newSession.description || ""}
                        onChange={(e) =>
                          setNewSession({
                            ...newSession,
                            description: e.target.value,
                          })
                        }
                        rows={3}
                        className="mt-1 border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="thumbnail"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Thumbnail Image
                      </label>
                      <div className="mt-1 flex items-center gap-4">
                        <input
                          type="file"
                          id="thumbnail"
                          ref={fileInputRef}
                          accept="image/*"
                          onChange={handleThumbnailChange}
                          className="block border p-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                          required
                        />
                        {thumbnailPreview && (
                          <div className="relative w-20 h-20">
                            <img
                              src={thumbnailPreview}
                              alt="Thumbnail preview"
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="videoId"
                        className="block text-sm font-medium text-gray-700"
                      >
                        YouTube Live URL
                      </label>
                      <input
                        type="text"
                        id="videoId"
                        value={newSession.videoId || ""}
                        onChange={(e) =>
                          setNewSession({
                            ...newSession,
                            videoId: e.target.value,
                          })
                        }
                        className="mt-1 border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="instructor"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Instructor Name
                      </label>
                      <input
                        type="text"
                        id="instructor"
                        value={newSession.instructor || ""}
                        onChange={(e) =>
                          setNewSession({
                            ...newSession,
                            instructor: e.target.value,
                          })
                        }
                        className="mt-1 border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        value={newSession.date || ""}
                        onChange={(e) =>
                          setNewSession({ ...newSession, date: e.target.value })
                        }
                        className="mt-1 border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      {loading ? <Spinner /> : "Create Session"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default LiveClass;
