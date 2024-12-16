import React from "react";
import Album from "../assets/album-cover/Album1.jpg";
import PlayButton from "../assets/icon/playbutton.svg";
const MiniSongCard = () => {
  return (
    <div className="flex gap-4 h-20 w-[32%] px-4 py-3 justify-between shadow-1 hover:bg-purple-100 transition-colors duration-150 cursor-pointer items-center group">
      <div className="relative flex h-full gap-4 items-center">
        {/* Cover */}
        {/* Kode ketika di hover */}
        <div className="absolute aspect-square flex items-center justify-center h-full group-hover:opacity-100 transition-opacity duration-300">
          <img src={Album} alt="Cover" className="brightness-50" />
          <img src={PlayButton} alt="Cover" className="absolute" />
        </div>

        {/* Kode ketika normal tidak di hover */}
        <img
          src={Album}
          alt="Cover"
          className="h-full z-0 group-hover:opacity-0 transition-opacity duration-300"
        />

        {/* Playlist Information */}
        <div className="flex flex-col">
          <p className="text-neutral-800 font-black">Cruel Summer</p>
          <p className="text-neutral-600 text-xs">Taylor Swift</p>
        </div>
      </div>
      <div className="justify-between flex flex-col items-end">
        <p className="text-neutral-800 text-xs">3:20</p>
        <p className="text-neutral-800 text-xs font-bold">...</p>
      </div>
    </div>
  );
};

export default MiniSongCard;
