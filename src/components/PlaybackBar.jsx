import React from "react";
import Play from "../assets/album-cover/Album5.jpg";
import { FaRegHeart, FaPlus } from "react-icons/fa6";
import { PiMicrophoneStage } from "react-icons/pi";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import {
  IoPlayCircleSharp,
  IoPauseCircleSharp,
  IoWifiSharp,
  IoShuffleOutline,
  IoRepeat,
  IoListSharp,
  IoVolumeOff,
  IoNewspaperSharp,
  IoOptions,
} from "react-icons/io5";

const PlaybackBar = () => {
  return (
    <div className="w-full h-[11%] border-t-2 p-3 flex items-center justify-between">
      <div className="flex gap-4 h-full w-auto duration-150 items-center">
        <img src={Play} alt="Cover" className="h-full" />
        <div className="flex flex-col">
          <p className="text-neutral-800 font-black text-sm">About You</p>
          <p className="text-neutral-600 text-xs">The 1975</p>
        </div>
        <div className="flex h-full gap-2 text-neutral-800 items-center">
          <FaRegHeart className="cursor-pointer" />
          <FaPlus className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col w-[35%] h-full items-center">
        <div className="flex gap-2 text-primary h-full items-center text-2xl">
          <IoShuffleOutline className="cursor-pointer" />
          <BiSkipPrevious className="cursor-pointer" />
          <p className="text-3xl">
            <IoPlayCircleSharp className="cursor-pointer" />
          </p>
          <BiSkipNext className="cursor-pointer" />
          <IoRepeat className="cursor-pointer" />
        </div>
        <div className="flex gap-2 w-full items-center">
          <p className="text-xs text-neutral-800">1.32</p>
          <div className="w-0 grow h-[3px] bg-neutral-500">
            <hr className="h-[3px] w-4/6 border-none bg-primary rounded-full cursor-pointer" />
          </div>
          <p className="text-xs text-neutral-800">2.05</p>
        </div>
      </div>
      <div className="flex gap-2 text-primary h-full items-center text-base max-w-1/3">
        <IoListSharp className="cursor-pointer" />
        <IoWifiSharp className="cursor-pointer" />
        <div className="flex items-center w-[72px]">
          <IoVolumeOff className="cursor-pointer" />
          <div className="w-full grow h-[3px] bg-neutral-400">
            <hr className="h-[3px] w-1/3 border-none bg-primary cursor-pointer rounded-full" />
          </div>
        </div>
        <IoNewspaperSharp className="cursor-pointer" />
        <PiMicrophoneStage className="cursor-pointer" />
        <IoOptions className="cursor-pointer" />
      </div>
    </div>
  );
};

export default PlaybackBar;
