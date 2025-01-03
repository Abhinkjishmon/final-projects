import React, { useState, useEffect } from "react";
import { ImagePlus, Type, Eye } from "lucide-react";

function BlogEditor({ onPreview, initialBlog }) {
  const [title, setTitle] = useState(initialBlog.title);
  const [category, setCategory] = useState(initialBlog.category);
  const [blocks, setBlocks] = useState(initialBlog.content);

  useEffect(() => {
    setTitle(initialBlog.title);
    setCategory(initialBlog.category);
    setBlocks(initialBlog.content);
  }, [initialBlog]);

  const handleImageUpload = (index) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const newBlocks = [...blocks];
          newBlocks.splice(index + 1, 0, {
            type: "image",
            content: reader.result,
          });
          setBlocks(newBlocks);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const addTextBlock = (index) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index + 1, 0, { type: "text", content: "" });
    setBlocks(newBlocks);
  };

  const updateBlock = (index, content) => {
    const newBlocks = [...blocks];
    newBlocks[index].content = content;
    setBlocks(newBlocks);
  };

  const handlePreview = () => {
    onPreview({
      title,
      category,
      content: blocks,
      createdAt: new Date(),
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <input
        type="text"
        placeholder="Enter your blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-4xl font-bold p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border border-gray-500 rounded-md"
      >
        <option value="">Select Category</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="travel">Travel</option>
        <option value="food">Food</option>
        <option value="Living">Living</option>
        <option value="Moving">Moving</option>
        <option value="Housing">Housing</option>
        <option value="Education">Education</option>
        <option value="Finance">Finance</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Working">Working</option>
      </select>

      <div className="space-y-4">
        {blocks.map((block, index) => (
          <div key={index} className="relative group flex">
            <div className="flex-1">
              {block.type === "text" ? (
                <textarea
                  value={block.content}
                  onChange={(e) => updateBlock(index, e.target.value)}
                  placeholder="Start writing..."
                  className="w-full min-h-[100px] p-3  border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-y"
                />
              ) : (
                <div className="relative w-full">
                  <img
                    src={block.content}
                    alt="Blog content"
                    className="w-full rounded-lg"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col items-center space-y-2 mr-4">
              <button
                onClick={() => handleImageUpload(index)}
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                title="Add image"
              >
                <ImagePlus size={20} />
              </button>
              <button
                onClick={() => addTextBlock(index)}
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                title="Add text"
              >
                <Type size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={handlePreview}
          disabled={!title || !category || blocks.every((b) => !b.content)}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Eye size={20} />
          Preview
        </button>
      </div>
    </div>
  );
}
export default BlogEditor;
