import React, { useEffect } from "react";
import { AuthorInfo, BlogCard, BlogContent } from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";

const BlogReadPage = () => {
  const post = {
    title: "British Academic Traditions",
    excerpt:
      "Explore the rich traditions that make British education unique, from formal halls to academic dress.",
    author: "Dr. Sarah Thompson",
    authorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    date: "2024-03-15",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1470",
    content: `
      <p>The British education system is renowned worldwide for its rich traditions and academic excellence. These traditions, some dating back centuries, continue to shape the educational experience of students today.</p>
      
      <h2>Historical Foundations</h2>
      <p>British academic traditions have their roots in medieval times, when universities like Oxford and Cambridge were first established. These institutions set the foundation for what would become one of the world's most respected education systems.</p>
      
      <h2>Academic Dress and Ceremonies</h2>
      <p>One of the most visible aspects of British academic tradition is the use of academic dress. From graduation ceremonies to formal halls, academic gowns and hoods play a significant role in university life. Each element of academic dress carries specific meaning, indicating the wearer's degree and institution.</p>
      
      <h2>The Tutorial System</h2>
      <p>Perhaps the most distinctive feature of British higher education is the tutorial system. This personalized approach to learning, where students meet regularly with tutors in small groups or one-on-one, encourages deep critical thinking and intellectual development.</p>
      
      <h2>Modern Adaptations</h2>
      <p>While maintaining these cherished traditions, British universities have successfully adapted to modern educational needs. Today's institutions blend historical practices with innovative teaching methods and cutting-edge research facilities.</p>
    `,
  };

  const relatedPosts = [
    {
      title: "Life at Oxford: A Student's Perspective",
      excerpt:
        "First-hand experiences of studying at one of Britain's oldest universities.",
      image:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=500",
      slug: "life-at-oxford",
    },
    {
      title: "Evolution of British Education",
      excerpt:
        "How the UK education system has adapted to modern needs while preserving traditions.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=500",
      slug: "evolution-of-british-education",
    },
  ];
  useEffect(() => {scrollToTop()}, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[500px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="mx-auto px-4 py-12 mx-8 -mt-32 relative">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

          <AuthorInfo
            name={post.author}
            image={post.authorImage}
            date={post.date}
            readTime={post.readTime}
          />

          <BlogContent content={post.content} />
        </div>
        <div className="grid md:grid-cols-2 py-4 lg:grid-cols-2 gap-8 mb-8">
          {relatedPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogReadPage;
