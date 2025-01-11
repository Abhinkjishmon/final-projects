import React, { useEffect, useState } from "react";
import { AuthorInfo, BlogCard, BlogContent } from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import { useParams } from "react-router-dom";
import { getOneBlogs } from "@/apiService.js/culturalfit.service";
import { formatDate } from "@/utils/date";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";

const BlogReadPage = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState();
  const [relatedBlogDetails, setrelatedBlogDetails] = useState();
  const [formattedDate, setFormattedDate] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setIsLiked((prev) => !prev);
  };
  const handleShare = async () => {
    const shareData = {
      title: blogDetails?.title,
      text: blogDetails?.description,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };
  const fetchSingleBlogDetails = async () => {
    const response = await getOneBlogs(id);
    if (response.blogs) {
      setBlogDetails(response.blogs);
      setrelatedBlogDetails(response.relatedBlogs);
      setFormattedDate(formatDate(response?.blogs.createdAt));
    }
  };
  useEffect(() => {
    scrollToTop();
    fetchSingleBlogDetails();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[400px]">
        <img
          src={
            blogDetails?.content.find((item) => item.type === "image").content
          }
          alt={blogDetails?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className=" px-4 py-12 mx-8 -mt-48 relative">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center flex-row md:flex-row justify-between mb-4">
            <h1 className="text-4xl font-bold mb-6">{blogDetails?.title}</h1>
            <div className="flex gap-3 items-start">
              <div className="flex flex-col justify-center tems-center">
                <button
                  onClick={handleLikeToggle}
                  className="text-2xl text-gray-700 hover:text-red-500 transition-all"
                >
                  {isLiked ? (
                    <AiFillHeart className="text-red-500" />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </button>
                <span className="ml-2 text-gray-600 text-lg">{likeCount}</span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center text-xl text-gray-700 hover:text-blue-500 transition-all"
              >
                <FiShare2 className="mr-2" />
                Share
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <AuthorInfo
              name={blogDetails?.author.fullname}
              image={blogDetails?.author.profileImg}
              date={formattedDate}
            />
          </div>

          <BlogContent content={blogDetails?.content} />
        </div>
        <h1 className="font-semibold text-4xl py-6">Related Blogs</h1>
        <div className="grid md:grid-cols-2 py-4 lg:grid-cols-4 gap-8 mb-8">
          {relatedBlogDetails?.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              content={post.content}
              author={post.author}
              postDetails={post}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogReadPage;
