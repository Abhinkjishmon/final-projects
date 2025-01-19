import { Rightbar, Sidebar } from "@/components/custom";
import React, { useEffect, useState } from "react";
import { FaFileAlt, FaImage, FaVideo } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Download, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ResourcesUploadForm from "@/components/custom/profile/classroom/resourcesUploadForm";
import { getStudyMeaterial } from "@/apiService.js/acadamic.service";
function Resources() {
  const [resources, setResources] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { id } = useParams();
  const getYoutubeEmbedUrl = (url) => {
    const videoId = url.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]*)/
    )?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };
  useEffect(() => {
    const getAllStudyMeaterial = async () => {
      const response = await getStudyMeaterial(id);
      setResources(response);
    };
    getAllStudyMeaterial();
  }, [isDialogOpen]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="w-full mx-auto space-y-6">
          <div className="min-h-screen bg-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Resources</h1>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger>
                  <button className="bg-blue-600 text-white rounded-md p-2">
                    Add Resources
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogDescription>
                      <ResourcesUploadForm
                        closeDialog={() => setIsDialogOpen(false)}
                      />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
              <div className="mx-auto">
                <div className=" scroll-bar overflow-hidden">
                  <div className="p-6">
                    {resources?.length > 0 ? (
                      resources?.reverse().map((resource) => (
                        <div key={resource?.id} className="mb-6">
                          <h1 className="text-xl font-semibold text-gray-900">
                            {resource?.title}
                          </h1>
                          <p className="text-gray-600">
                            {resource?.discriptions}
                          </p>
                          <div className="mt-4">
                            {resource?.type === "video" && (
                              <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                  src={getYoutubeEmbedUrl(resource?.url)}
                                  className="w-full h-[500px] rounded-lg"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                            )}

                            {resource?.type === "image" && (
                              <div>
                                <img
                                  src={resource?.url}
                                  alt={resource?.name}
                                  className="max-w-full h-auto rounded-lg"
                                />
                                <a
                                  href={resource?.url}
                                  download={`${resource?.name}.jpg`}
                                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Download Image
                                </a>
                              </div>
                            )}

                            {resource?.type === "pdf" && (
                              <div>
                                <a
                                  href={resource?.url}
                                  download={resource?.title}
                                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Download File
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-gray-600">
                            No resources available
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resources;
