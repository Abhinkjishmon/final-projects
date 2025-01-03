import React from "react";
import { ArrowLeft, Send } from "lucide-react";

function BlogPreview({ blog, onBack, onPublish }) {
  const handlePublish = () => {
    console.log("Publishing blog with data:", {
      title: blog.title,
      category: blog.category,
      content: blog.content,
      createdAt: blog.createdAt,
      contentBlockCount: blog.content.length,
      textBlocks: blog.content.filter((block) => block.type === "text").length,
      imageBlocks: blog.content.filter((block) => block.type === "image")
        .length,
    });

    onPublish();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={20} />
          Back to Editor
        </button>
      </div>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {blog.category}
          </span>
          <time>{blog.createdAt?.toLocaleDateString()}</time>
        </div>

        {blog.content.map((block, index) => (
          <div key={index} className="mb-6">
            {block.type === "text" ? (
              <p className="whitespace-pre-wrap">{block.content}</p>
            ) : (
              <img
                src={block.content}
                alt="Blog content"
                className="w-full rounded-lg shadow-md"
              />
            )}
          </div>
        ))}
      </article>
      <div className="w-full flex justify-end">
        <button
          onClick={handlePublish}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-green-700"
        >
          <Send size={20} />
          Publish
        </button>
      </div>
    </div>
  );
}

export default BlogPreview;
