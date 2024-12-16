import React from "react";
import Avatar from "../assets/album-cover/Album6.jpg";

const DailyPlaylistCard = () => {
  return (
    <div className="flex flex-col rounded-lg min-h-64 gap-2 w-52 px-3 py-3 shadow-1 hover:bg-purple-100 transition-colors duration-150 cursor-pointer items-center">
      <img src={Avatar} alt="Cover" className="w-full rounded-lg" />
      {/* Title */}
      <p className="text-neutral-600 text-xs">
        Featuring Lana Del Rey, Maroon 5, and The Weekend
      </p>
    </div>
  );
};

export default DailyPlaylistCard;
