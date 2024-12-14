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

const VideoPlayer = () => {
  return (
    <div className="relative w-full aspect-video bg-[#0891b2] rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1669994271436-0445d82d3bf6"
        alt="Course thumbnail"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30">
              <Play className="w-5 h-5 text-white" />
            </button>
            <span className="text-white text-sm">30:14 / 1:00:00</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30">
              <Settings className="w-4 h-4 text-white" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30">
              <Maximize2 className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        <div className="w-full bg-white/30 rounded-full h-1">
          <div className="bg-white w-1/3 h-full rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
