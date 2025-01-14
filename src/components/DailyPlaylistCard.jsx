import React from "react";
import Avatar from "../assets/album-cover/Album6.jpg";
import PlayButton from "../assets/icon/playbutton.svg";

const DailyPlaylistCard = () => {
  return (
    <div className="flex relative flex-col rounded-lg h-auto gap-2 max-w-80 px-3 py-3 shadow-2 transition-colors duration-150 cursor-pointer items-center group">
      {/* Kode ketika di hover */}
      <div className="absolute top-0 z-0 aspect-square flex items-center justify-center w-full px-3 group-hover:opacity-100 transition-opacity duration-300">
        <img src={Avatar} alt="Cover" className="brightness-50 rounded-lg w-full" />
        <img src={PlayButton} alt="Cover" className="absolute w-20" />
      </div>
      {/* Kode ketika normal tidak di hover */}
      <img src={Avatar} alt="Cover" className="w-full rounded-lg group-hover:opacity-0 z-10 transition-opacity duration-300" />
      <h1 className="absolute text-sm top-2/3 text-neutral-0 z-20 font-bold">DAILY</h1>
      {/* <img src={Avatar} alt="Cover" className="w-full rounded-lg" /> */}
      {/* Title */}
      <p className="text-neutral-600 text-xs">Featuring Lana Del Rey, Maroon 5, and The Weekend</p>
    </div>
  );
};

export default DailyPlaylistCard;
