import React from "react";
import PlaylistCover from "../assets/image/PlaylistCover.png";

const MiniPlaylist = () => {
  return (
    <div className="flex gap-4 h-16 w-auto hover:bg-purple-100 transition-colors duration-150 cursor-pointer items-center">
      <img src={PlaylistCover} alt="Cover" className="h-full" />
      <div className="flex flex-col">
        <p className="text-neutral-800">Playlist 1</p>
        <p className="text-neutral-600 text-xs">by user</p>
      </div>
    </div>
  );
};

export default MiniPlaylist;
