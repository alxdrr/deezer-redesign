import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PlaybackBar from "./components/PlaybackBar";
import Home from "./pages/Home";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="w-screen h-dvh flex">
      <Sidebar />
      <div className="flex flex-col grow w-full">
        <Header />
        <Home />
        <PlaybackBar />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </div>
  );
};

export default App;
