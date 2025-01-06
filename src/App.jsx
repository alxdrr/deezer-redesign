import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PlaybackBar from "./components/PlaybackBar";
import Home from "./pages/Home";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track, handleEnded } = useContext(PlayerContext);
  return (
    <div className="w-screen h-dvh flex-col">
      <div className="w-screen h-[89%] flex">
        <Sidebar />
        <div className="flex flex-col grow w-full">
          <Header />
          <Home />
          <audio
            ref={audioRef}
            src={track.file}
            preload="auto"
            onEnded={handleEnded}
          ></audio>
        </div>
      </div>
      <PlaybackBar />
    </div>
  );
};

export default App;
