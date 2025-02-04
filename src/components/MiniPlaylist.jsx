import React from "react";
import PlaylistCover from "../assets/album-cover/Album2.jpg";

const MiniPlaylist = ({ name, owner, id }) => {
  return (
    <div className="flex gap-4 h-16 w-auto hover:bg-purple-100 transition-colors duration-150 cursor-pointer items-center">
      <img src={PlaylistCover} alt="Cover" className="h-full" />
      <div className="flex flex-col">
        <p className="text-neutral-800">{name}</p>
        <p className="text-neutral-600 text-xs">{owner}</p>
      </div>
    </div>
  );
};

export default MiniPlaylist;
