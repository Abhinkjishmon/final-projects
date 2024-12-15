import React from "react";
import { PenSquare, Heart } from "lucide-react";
import BlogCard from "./BlogCard";

function BlogsPage() {
  const mockMyBlogs = [
    {
      id: "1",
      title: "Getting Started with React and TypeScript",
      excerpt:
        "Learn how to set up a new React project with TypeScript and best practices.",
      content: "Full blog content here...",
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      },
      coverImage:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      publishedDate: "2024-03-15",
      readTime: 5,
      likes: 124,
    },
    {
      id: "2",
      title: "Advanced TypeScript Patterns",
      excerpt:
        "Explore advanced TypeScript patterns and techniques for better code.",
      content: "Full blog content here...",
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      },
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      publishedDate: "2024-03-10",
      readTime: 8,
      likes: 89,
    },
  ];
  const mockLikedBlogs = [
    {
      id: "3",
      title: "Building Scalable Web Applications",
      excerpt:
        "Learn the principles of building scalable and maintainable web applications.",
      content: "Full blog content here...",
      author: {
        name: "Jane Smith",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      },
      coverImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      publishedDate: "2024-03-12",
      readTime: 10,
      likes: 256,
      isLiked: true,
    },
  ];
  const [activeTab, setActiveTab] = React.useState("my-blogs");

  const tabs = [
    { id: "my-blogs", label: "My Blogs", icon: PenSquare },
    { id: "liked-blogs", label: "Liked Blogs", icon: Heart },
  ];

  const handleLikeToggle = (blogId) => {
    // In a real app, this would make an API call to toggle the like status
    console.log("Toggle like for blog:", blogId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Blogs</h1>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              New Blog
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`
                    flex items-center px-1 py-4 border-b-2 font-medium text-sm
                    ${
                      activeTab === id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === "my-blogs" &&
              mockMyBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  onLikeToggle={handleLikeToggle}
                />
              ))}

            {activeTab === "liked-blogs" &&
              mockLikedBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  onLikeToggle={handleLikeToggle}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogsPage;
