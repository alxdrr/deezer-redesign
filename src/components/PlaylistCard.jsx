import React from "react";
import Avatar from "../assets/album-cover/Album6.jpg";
import PlayButton from "../assets/icon/playbutton.svg";

const PlaylistCard = ({ name, cover, owner, total }) => {
  return (
    <div className="flex relative flex-col rounded-lg min-h-64 gap-2 w-52 px-3 py-3 shadow-2 transition-colors duration-150 cursor-pointer items-center group">
      {/* Kode ketika di hover */}
      <div className="absolute top-0 z-0 aspect-square flex items-center justify-center w-full px-3 group-hover:opacity-100 transition-opacity duration-300">
        <img src={cover} alt="Cover" className="brightness-50 rounded-lg w-full" />
        <img src={PlayButton} alt="Cover" className="absolute w-20" />
      </div>
      {/* Kode ketika normal tidak di hover */}
      <img src={cover} alt="Cover" className="w-full rounded-lg group-hover:opacity-0 z-10 transition-opacity duration-300" />
      {/* <img src={Avatar} alt="Cover" className="w-full rounded-lg" /> */}
      {/* Title */}
      <div className="flex flex-col justify-start items-start w-full">
        {" "}
        <p className="text-neutral-800 text-sm font-black line-clamp-1">{name}</p>
        <p className="text-neutral-600 text-sm line-clamp-1">{owner}</p>
        <p className="text-neutral-600 text-xs">{total} Tracks</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
