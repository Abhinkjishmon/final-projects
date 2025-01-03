import React, { useEffect, useState } from "react";
import { PenLine } from "lucide-react";
import { BlogEditor, BlogPreview } from "@/components/custom";
import { createNewBlog } from "@/apiService.js/culturalfit.service";
import { scrollToTop } from "@/utils/scroll";
function CreateBlog() {
  const [mode, setMode] = useState("edit");
  const [blogDraft, setBlogDraft] = useState({
    title: "",
    category: "",
    content: [{ type: "text", content: "" }],
    createdAt: new Date(),
  });

  const handlePreview = (blog) => {
    setBlogDraft(blog);
    setMode("preview");
  };

  const handlePublish = async () => {
    const response = await createNewBlog(blogDraft);
    console.log(response);
    setBlogDraft({
      title: "",
      category: "",
      content: [{ type: "text", content: "" }],
      createdAt: new Date(),
    });
    setMode("edit");
  };
  useEffect(() => {
    scrollToTop();
  }, [mode]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto p-4 flex items-center gap-2">
          <PenLine className="text-blue-600" size={24} />
          <h1 className="text-xl font-semibold">Blog Creator</h1>
        </div>
      </header>

      <main className="py-8">
        {mode === "edit" ? (
          <BlogEditor onPreview={handlePreview} initialBlog={blogDraft} />
        ) : (
          <BlogPreview
            blog={blogDraft}
            onBack={() => setMode("edit")}
            onPublish={handlePublish}
          />
        )}
      </main>
    </div>
  );
}

export default CreateBlog;
