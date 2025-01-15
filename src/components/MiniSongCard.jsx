import React, { useContext } from "react";
import PlayButton from "../assets/icon/playbutton.svg";
import playGIF from "../assets/icon/play.gif";
import { PlayerContext } from "../context/PlayerContext";
import { IoPlayCircleSharp, IoPauseCircleSharp } from "react-icons/io5";
const MiniSongCard = ({ title, artist, duration, image, id }) => {
  const { playWithId, playStatus, track, pause } = useContext(PlayerContext);
  return (
    <div className="flex relative h-20 px-4 py-3 justify-between shadow-1 hover:bg-purple-100 transition-colors duration-150 cursor-pointer items-center group">
      <div className="relative flex h-full gap-4 items-center">
        {/* Kode ketika di hover */}

        <div className="absolute aspect-square flex items-center justify-center h-full group-hover:opacity-100 group-hover:z-10 transition-opacity duration-300">
          <img src={image} alt="Cover" className="brightness-50" />
          {playStatus && track.id === id ? (
            <>
              <IoPauseCircleSharp onClick={() => pause()} className="text-primary bg-white rounded-full text-2xl cursor-pointer absolute" />
            </>
          ) : (
            <IoPlayCircleSharp onClick={() => playWithId(id)} className="text-primary bg-white rounded-full text-2xl absolute cursor-pointer" />
          )}
        </div>

        {/* Kode ketika normal tidak di hover */}
        <img src={image} alt="Cover" className="h-full z-0 group-hover:opacity-0 transition-opacity duration-300" />

        {/* Playlist Information */}
        <div className="flex flex-col">
          {playStatus && track.id === id ? (
            <div className="flex gap-2">
              <img src={playGIF} className="h-5" alt="" />
              <p className={"text-primary font-bold text-sm line-clamp-1"}>{title}</p>
            </div>
          ) : (
            <p className={"text-neutral-800 font-bold text-sm line-clamp-1"}>{title}</p>
          )}

          <p className="text-neutral-600 text-xs line-clamp-1">{artist}</p>
        </div>
      </div>
      <div className="justify-between flex flex-col items-end">
        <p className="text-neutral-800 text-xs">{duration}</p>
        <p className="text-neutral-800 text-xs font-bold">...</p>
      </div>
    </div>
  );
};

export default MiniSongCard;
