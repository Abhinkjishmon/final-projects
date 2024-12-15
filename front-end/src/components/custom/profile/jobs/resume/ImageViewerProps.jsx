import React from "react";


 function ImageViewer({ url }) {
  return (
    <div className="w-full max-h-[800px] border border-gray-200 rounded-lg overflow-hidden">
      <img src={url} alt="Resume" className="w-full h-full object-contain" />
    </div>
  );
}

export default ImageViewer