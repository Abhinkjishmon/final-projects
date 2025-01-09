import React, { useEffect, useState } from "react";
import { AuthorInfo, BlogCard, BlogContent } from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import { useParams } from "react-router-dom";
import { getOneBlogs } from "@/apiService.js/culturalfit.service";
import { formatDate } from "@/utils/date";

const BlogReadPage = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState();
  const [relatedBlogDetails, setrelatedBlogDetails] = useState();
  const [formattedDate, setFormattedDate] = useState("");

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
          <h1 className="text-4xl font-bold mb-6">{blogDetails?.title}</h1>

          <AuthorInfo
            name={blogDetails?.author.fullname}
            image={blogDetails?.author.profileImg}
            date={formattedDate}
          />

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
