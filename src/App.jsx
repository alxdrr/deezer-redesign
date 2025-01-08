import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Information from "./components/Information";
import PlaybackBar from "./components/PlaybackBar";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track, handleEnded } = useContext(PlayerContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <div className="w-screen h-dvh flex-col">
    //   <div className="w-screen relative h-[89%] flex">
    //     <Sidebar />
    //     <div className="flex flex-col grow w-full">
    //       <Header />
    //       <Home />
    //       <audio
    //         ref={audioRef}
    //         src={track.file}
    //         preload="auto"
    //         onEnded={handleEnded}
    //       ></audio>
    //     </div>
    //     <Information isOpen={isOpen} />
    //   </div>
    //   <PlaybackBar drawer={() => setIsOpen(!isOpen)} />
    // </div>
    <Plans />
  );
};

export default App;
