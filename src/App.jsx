import { useContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Information from "./components/Information";
import { useLocation } from "react-router";
import PlaybackBar from "./components/PlaybackBar";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import { PlayerContext } from "./context/PlayerContext";
import SearchResult from "./pages/Search";
import { getAuthUrl, getTokenFromUrl } from "./utils/spotifyAuth";
import SpotifyPlayer from "./components/SpotifyPlayer";
const App = () => {
  const { audioRef, track, handleEnded } = useContext(PlayerContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenData = getTokenFromUrl();
    window.location.hash = ""; // Hapus token dari URL setelah mengambilnya
    if (tokenData.access_token) {
      setToken(tokenData.access_token);
    }
  }, []);
  return (
    <div className="w-screen h-dvh flex-col">
      <div className="w-screen relative h-[89%] flex">
        <Sidebar />
        <div className="flex flex-col grow h-full w-full">
          <Header />
          <div className="flex grow relative h-0">
            {location.pathname === "/home" ? <Home isOpen={isOpen} /> : ""}
            {location.pathname.includes("/playlist") ? <Playlist /> : ""}
            {location.pathname === "/search" ? <SearchResult /> : ""}
            <Information isOpen={isOpen} />
          </div>

          <audio ref={audioRef} src={track.file} preload="auto" onEnded={handleEnded}></audio>
        </div>
      </div>
      <div className="fixed z-50">{!token ? <button onClick={() => (window.location.href = getAuthUrl())}>Login with Spotify</button> : <SpotifyPlayer token={token} />}</div>
      <PlaybackBar drawer={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default App;
