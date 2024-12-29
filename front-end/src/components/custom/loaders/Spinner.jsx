import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-5 h-5 border-4 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;