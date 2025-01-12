import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Information from "./components/Information";
import { useLocation } from "react-router";
import PlaybackBar from "./components/PlaybackBar";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track, handleEnded } = useContext(PlayerContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="w-screen h-dvh flex-col">
      <div className="w-screen relative h-[89%] flex">
        <Sidebar />
        <div className="flex flex-col grow w-full">
          <Header />
          {location.pathname === "/home" ? <Home /> : ""}
          {location.pathname === "/playlist" ? <Playlist /> : ""}

          <audio
            ref={audioRef}
            src={track.file}
            preload="auto"
            onEnded={handleEnded}
          ></audio>
        </div>
        <Information isOpen={isOpen} />
      </div>
      <PlaybackBar drawer={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default App;
