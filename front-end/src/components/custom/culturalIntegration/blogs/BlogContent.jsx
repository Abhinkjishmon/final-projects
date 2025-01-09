import React from "react";

const BlogContent = ({ content }) => {

  return (
    <div className="prose prose-lg px-10 max-w-none">
      {content?.map((item, index) => {
        if (item.type === "text") {
          return <div key={index}>{item.content}</div>;
        } else if (item.type === "image") {
          return (
            <div className="w-full flex justify-center">
              <img
                key={index}
                src={item.content}
                alt={`Content ${index}`}
                className="my-4 px-24  w-[80%]"
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default BlogContent;
