import React from "react";
import Avatar from "../assets/image/PlaylistCover.png";

const MiniSongCard = () => {
  return (
    <div className="flex gap-4 h-20 w-[32%] px-4 py-3 shadow-1 hover:bg-purple-100 transition-colors duration-150 cursor-pointer items-center">
      <img src={Avatar} alt="Cover" className="h-full" />
      <div className="flex flex-col">
        <p className="text-neutral-800">Playlist 1</p>
        <p className="text-neutral-600 text-xs">by user</p>
      </div>
    </div>
  );
};

export default MiniSongCard;
