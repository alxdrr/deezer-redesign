import { useContext } from "react";
import { FaRegHeart, FaPlus } from "react-icons/fa6";
import { PiMicrophoneStage } from "react-icons/pi";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { IoPlayCircleSharp, IoPauseCircleSharp, IoWifiSharp, IoShuffleOutline, IoRepeat, IoListSharp, IoVolumeOff, IoNewspaperSharp, IoOptions } from "react-icons/io5";
import { PlayerContext } from "../context/PlayerContext";

const PlaybackBar = ({ drawer }) => {
  const { seekBar, seekBg, volume, handleVolumeChange, playStatus, repeatStatus, repeat, play, pause, track, time, previous, next, seekSong } = useContext(PlayerContext);
  return (
    <div className="w-full h-[11%] border-t-2 p-3 flex items-center justify-between">
      <div className="flex gap-4 h-full w-auto duration-150 items-center">
        <img src={track.image} alt="Cover" className="h-full" />
        <div className="flex flex-col">
          <p className="text-neutral-800 font-bold text-sm">{track.name}</p>
          <p className="text-neutral-600 text-xs">{track.artist}</p>
        </div>
        <div className="flex h-full gap-2 text-neutral-800 items-center">
          <FaRegHeart className="cursor-pointer" />
          <FaPlus className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col w-[35%] h-full items-center">
        <div className="flex gap-2 text-primary h-full items-center text-2xl">
          <IoShuffleOutline className="cursor-pointer" />
          <BiSkipPrevious onClick={previous} className="cursor-pointer" />
          <p className="text-3xl">
            {playStatus ? <IoPauseCircleSharp onClick={pause} className="cursor-pointer" /> : <IoPlayCircleSharp onClick={play} className="cursor-pointer" />}
          </p>
          <BiSkipNext onClick={next} className="cursor-pointer" />
          {repeatStatus ? <IoRepeat onClick={repeat} className="cursor-pointer text-primary" /> : <IoRepeat onClick={repeat} className="cursor-pointer text-neutral-500" />}
        </div>
        <div className="flex gap-2 w-full items-center">
          <p className="text-xs text-neutral-800">
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div ref={seekBg} onClick={seekSong} className="w-0 grow h-[3px] bg-neutral-500">
            <hr ref={seekBar} className="h-[3px] w-0 border-none bg-primary rounded-full cursor-pointer" />
          </div>
          <p className="text-xs text-neutral-800">
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="flex gap-2 text-primary h-full items-center text-base max-w-1/3">
        <IoListSharp className="cursor-pointer" />
        <IoWifiSharp className="cursor-pointer" />
        <div className="flex items-center w-[72px]">
          <IoVolumeOff className="cursor-pointer" />
          {/* <div className="w-full grow h-[3px] bg-neutral-400">
            <hr className="h-[3px] w-0 border-none bg-primary cursor-pointer rounded-full" />
          </div> */}{" "}
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01" // Memungkinkan kontrol volume yang halus
            value={volume}
            onChange={handleVolumeChange}
            className="custom-range w-full h-[4px] bg-gray-300 rounded-lg appearance-none focus:outline-none"
          />
        </div>
        <IoNewspaperSharp onClick={drawer} className="cursor-pointer" />
        <PiMicrophoneStage className="cursor-pointer" />
        <IoOptions className="cursor-pointer" />
      </div>
    </div>
  );
};

export default PlaybackBar;
