import React from "react";
import Album from "../assets/album-cover/Album1.jpg";

const MiniSongCard = () => {
  return (
    <div className="flex gap-4 h-20 w-[32%] px-4 py-3 shadow-1 hover:bg-purple-100 transition-colors duration-150 cursor-pointer items-center">
      {/* Cover */}
      <img src={Album} alt="Cover" className="h-full" />
      {/* Playlist Information */}
      <div className="flex flex-col">
        <p className="text-neutral-800 font-black">Cruel Summer</p>
        <p className="text-neutral-600 text-xs">Taylor Swift</p>
      </div>
    </div>
  );
};

export default MiniSongCard;
