import { useContext, useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Information from "./components/Information";
import { useLocation } from "react-router";
import PlaybackBar from "./components/PlaybackBar";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import { PlayerContext } from "./context/PlayerContext";
import SearchResult from "./pages/Search";
import axios from "axios";

const App = () => {
  const { audioRef, track, handleEnded } = useContext(PlayerContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const client_id = "465d0f050b12484697177ff5238d3226"; // Replace with your Client ID
  const client_secret = "be7cdee0d3f14182accbad398e70f645"; // Replace with your Client Secret
  const [token, setToken] = useState(null);
  useEffect(() => {
    const fetchToken = async () => {
      const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
          Authorization: "Basic " + btoa(`${client_id}:${client_secret}`),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: new URLSearchParams({
          grant_type: "client_credentials",
        }),
      };

      try {
        const response = await axios.post(authOptions.url, authOptions.data, {
          headers: authOptions.headers,
        });
        if (response.status === 200) {
          setToken(response.data.access_token);
        }
      } catch (error) {
        console.error("Error fetching token", error);
      }
    };

    fetchToken();
  }, [client_id, client_secret]);
  return (
    <div className="w-screen h-dvh flex-col">
      <div className="w-screen relative h-[89%] flex">
        <Sidebar />
        <div className="flex flex-col grow h-full w-full">
          <Header results={searchResults} setResults={setSearchResults} />
          <div className="flex grow relative h-0">
            {location.pathname === "/home" ? <Home isOpen={isOpen} /> : ""}
            {location.pathname === "/playlist" ? <Playlist /> : ""}
            {location.pathname === "/search" ? <SearchResult results={searchResults} token={token} /> : ""}
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
