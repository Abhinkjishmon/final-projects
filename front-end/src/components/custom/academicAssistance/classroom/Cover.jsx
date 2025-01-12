import React from "react";
import {
  Play,
  Repeat,
  SkipBack,
  SkipForward,
  Settings,
  Maximize2,
  Share2,
} from "lucide-react";

const VideoPlayer = ({ coverImage }) => {
  return (
    <div className="relative w-full aspect-video bg-[#0891b2] rounded-lg overflow-hidden">
      <img
        src={coverImage}
        alt="Course thumbnail"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoPlayer;
