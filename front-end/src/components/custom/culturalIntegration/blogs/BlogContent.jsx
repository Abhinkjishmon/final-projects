import React from 'react';


const BlogContent= ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogContent;