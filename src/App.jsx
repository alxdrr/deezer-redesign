import { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Information from "./components/Information";
import { useLocation } from "react-router";
import PlaybackBar from "./components/PlaybackBar";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import { PlayerContext } from "./context/PlayerContext";
import SearchResult from "./pages/Search";

const App = () => {
  const { audioRef, track, handleEnded } = useContext(PlayerContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="w-screen h-dvh flex-col">
      <div className="w-screen relative h-[89%] flex">
        <Sidebar />
        <div className="flex flex-col grow h-full w-full">
          <Header />
          <div className="flex grow relative h-0">
            {location.pathname === "/home" ? <Home isOpen={isOpen} /> : ""}
            {location.pathname === "/playlist" ? <Playlist /> : ""}
            {location.pathname === "/search" ? <SearchResult /> : ""}
            <Information isOpen={isOpen} />
          </div>

          <audio ref={audioRef} src={track.file} preload="auto" onEnded={handleEnded}></audio>
        </div>
      </div>
      <PlaybackBar drawer={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default App;
