import React, { useEffect, useState } from "react";
import { PenSquare, Heart } from "lucide-react";

import { getUserBlog } from "@/apiService.js/profile.service";
import { BlogCard, SkeletonCard } from "../..";
import { Skeleton } from "@/components/ui/skeleton";

function BlogsPage() {
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
  const [activeTab, setActiveTab] = useState("my-blogs");
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(true);

  const tabs = [
    { id: "my-blogs", label: "My Blogs", icon: PenSquare },
    { id: "liked-blogs", label: "Liked Blogs", icon: Heart },
  ];

  const handleLikeToggle = (blogId) => {};
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoader(true);
        const response = await getUserBlog();
        setBlogs(response.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Blogs</h1>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              New Blog
            </button>
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === "my-blogs" && loader ? (
              <SkeletonCard /> // Show skeleton while loading
            ) : (
              <>
                {blogs?.map((post, index) => (
                  <BlogCard
                    key={index}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    postDetails={post}
                  />
                ))}
              </>
            )}
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
