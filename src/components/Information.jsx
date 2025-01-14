import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { motion } from "framer-motion";
import Loader from "../assets/icon/Loader.gif";
import verified from "../assets/icon/information-verified.svg";
import playGIF from "../assets/icon/play.gif";
import playGIF2 from "../assets/icon/playWhite.gif";
const Information = ({ isOpen }) => {
  const { track, story, playStatus } = useContext(PlayerContext);
  const drawerVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "100%", opacity: 0 },
  };

  return (
    <motion.div
      className={`${isOpen ? "block" : "hidden"} w-auto max-w-lg right-0 h-full border-l-2 bg-white flex flex-col gap-2 overflow-y-auto grow px-2 py-2 z-20`}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={drawerVariants}
      transition={{ type: "tween", duration: 0.2 }}
    >
      <div className="flex relative flex-col bg-white rounded-lg w-full gap-2 px-3 py-3 shadow-2 transition-colors duration-150 items-center">
        <div className="relative w-full h-auto flex flex-col gap-2 rounded-lg">
          <div className="flex items-center gap-4">
            <img src={playGIF} alt="" className={`h-9 ${playStatus ? "block" : "hidden"}`} />
            <h1 className={`text-3xl ${playStatus ? "text-primary" : "text-neutral-800"} font-black`}>Now Playing</h1>
          </div>

          <div className="relative">
            <img src={track.image} alt="Cover" className="z-10 rounded-lg" />
            <div className="absolute rounded-lg inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
        </div>

        <div className="flex flex-col bottom-6 absolute left-6 w-auto">
          <div className="flex items-center gap-2">
            <img src={playGIF2} alt="" className={`h-6 ${playStatus ? "block" : "hidden"}`} />
            <h1 className="text-xl text-neutral-0 z-20 font-bold">{track.name}</h1>
          </div>
          <p className="text-base z-20 w-auto text-white">{track.artist}</p>
        </div>
      </div>
      <div className="flex relative flex-col bg-white rounded-lg w-full gap-2 px-3 py-3 shadow-2 transition-colors duration-150">
        <h1 className="text-3xl text-neutral-800 font-black">Artist</h1>
        <div className="relative">
          <div className="relative w-full h-auto rounded-lg">
            <img src={track.image} alt="Cover" className="w-full max-h-52 object-cover rounded-lg z-10 transition-opacity duration-300" />
            <div className="absolute rounded-lg inset-0 bg-gradient-to-t from-transparent to-black opacity-90"></div>
          </div>

          <div className="flex flex-col top-3 absolute left-3 w-auto">
            <div className="flex gap-2">
              <img src={verified} alt="" className="w-4" />
              <h1 className="text-lg text-neutral-0 z-20 font-bold">{track.artist}</h1>
            </div>

            <p className="text-base z-20 w-auto text-white">{track.listener} Monthly Listener</p>
          </div>
          <p className="text-neutral-600 text-base pt-2">{track.artistProfile}</p>
        </div>
      </div>
      <div className="flex relative flex-col bg-white rounded-lg w-full gap-2 px-3 py-3 shadow-2 transition-colors duration-150">
        <h1 className="text-3xl text-neutral-800 font-black">Story</h1>
        <div className="relative">
          <div className="relative w-full h-auto rounded-lg">
            <img src={track.image} alt="Cover" className="w-full rounded-lg z-10 transition-opacity duration-300" />
            <div className="absolute rounded-lg inset-0 bg-black/50"></div>
          </div>

          <div className="flex flex-col top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 w-full text-center px-6 leading-5">
            {story.length == 50 ? (
              <div className="flex flex-col items-center justify-center">
                <img src={Loader} alt="" />
                <p className="text-xl z-20 w-auto text-white">{story}</p>
              </div>
            ) : (
              <p className="text-base leading-8 z-20 w-auto text-white">{story}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Information;
