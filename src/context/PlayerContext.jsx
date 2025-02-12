import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/object/songsData";
import noaudio from "../assets/mp3/noaudio.mp3";
import axios from "axios";
import { audio } from "framer-motion/client";
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const [musicID, setMusicID] = useState("");
  const [story, setStory] = useState("Crafting the story behind your song... Hang tight!");
  const [aboutArtist, setAboutArtist] = useState("");
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: { second: 0, minute: 0 },
  });
  const [searchResults, setSearchResults] = useState([]); //search track from csv
  const client_id = "465d0f050b12484697177ff5238d3226";
  const client_secret = "be7cdee0d3f14182accbad398e70f645";
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [track, setTrack] = useState(songsData[9]);
  const [playStatus, setPlayStatus] = useState(false);
  const [shuffleStatus, setShuffleStatus] = useState(false);
  const [repeatStatus, setRepeatStatus] = useState(false);
  const [trackData, setTrackData] = useState([]); //search track from spotify API
  const [volume, setVolume] = useState(1);

  // get token
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

  // get track info by query from API spotify (title get from csv processing)
  const fetchTrackDetails = async () => {
    if (!Array.isArray(searchResults) || searchResults.length === 0) {
      setError("No results to fetch");
      return;
    }
    if (!token) {
      setError("Invalid or missing token");
      return;
    }

    setLoading(true);
    try {
      const requests = searchResults.map((query) =>
        axios.get(`https://api.spotify.com/v1/search/?q=${query}&type=track&limit=1`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      );

      const responses = await Promise.all(requests);
      const tracks = responses
        .map((response) => response.data.tracks?.items[0]) // Ambil hanya item pertama
        .filter(Boolean); // Hilangkan undefined/null

      setTrackData(tracks);
      console.log("nih trackData: ", tracks);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // reload function on query changes
  useEffect(() => {
    fetchTrackDetails();
  }, [searchResults]);

  //get story from OpenAI API
  const generateStory = async () => {
    setStory("Crafting the story behind your song... Hang tight!"); // Reset pesan sebelum memulai permintaan
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/get-song-story", {
        title: track.name,
        artist: `{${Object.keys(track).length <= 9 ? track.artist : track.artists[0].name}`,
      });
      setStory(response.data.story);
    } catch (error) {
      setStory("Failed to load the story. Please try again.");
      console.error("Error fetching story:", error);
    }
  };
  const generateArtist = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/artist/get-about-artist", {
        artist: `{${Object.keys(track).length <= 9 ? track.artist : track.artists[0].name}`,
      });
      setAboutArtist(response.data.artist);
    } catch (error) {
      setAboutArtist("Failed to load the data. Please try again.");
      console.error("Error fetching data:", error);
    }
  };
  // reload function on track changes
  useEffect(() => {
    generateStory();
    generateArtist();
  }, [track]);

  // get track title from csv dataset
  const handleSearch = async () => {
    setLoading(true); // Set loading state
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/search", { query: query });
      setSearchResults(response.data.tracks);
    } catch (err) {
      setError(err.message); // Simpan pesan error
      console.log(error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume; // Mengubah volume audio
    }
  };
  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const shuffle = () => {
    setShuffleStatus(!shuffleStatus);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const repeat = () => {
    setRepeatStatus(!repeatStatus);
  };

  const handleEnded = () => {
    repeatStatus ? play() : next();
  };

  const previous = async () => {
    if (audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
    } else {
      if (track.id > 0) {
        await setTrack(songsData[track.id - 1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const seekSong = async (e) => {
    audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
  };
  const [currentTime, setCurrentTime] = useState(0);

  // Di dalam efek yang memantau pemutaran
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(audioRef.current.currentTime);
    }, 1000);

    return () => clearInterval(interval); // Membersihkan interval saat komponen tidak lagi digunakan
  }, [playStatus]);
  const playWithId = async (id) => {
    if (id.length > 2) {
      for (const data of trackData) {
        if (data.name === id) {
          if (Object.keys(data).length > 9) {
            const updatedData = { ...data, file: noaudio, duration: data.duration_ms }; // Buat variabel baru
            await setTrack(updatedData); // Mengatur track jika ditemukan
          }
          break; // Keluar dari loop setelah menemukan track
        }
      }
    } else {
      await setTrack(songsData[id]); // Mengatur track jika ditemukan
    }
    await audioRef.current.play();

    setPlayStatus(true);
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width = Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    });
  }, [audioRef]);

  const contextValue = {
    trackData,
    searchResults,
    handleSearch,
    query,
    setLoading,
    setQuery,
    shuffleStatus,
    shuffle,
    story,
    audioRef,
    seekBg,
    seekBar,
    volume,
    handleVolumeChange,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    aboutArtist,
    play,
    pause,
    musicID,
    setMusicID,
    repeatStatus,
    repeat,
    playWithId,
    previous,
    next,
    currentTime,
    seekSong,
    handleEnded,
  };
  return <PlayerContext.Provider value={contextValue}>{props.children}</PlayerContext.Provider>;
};

export default PlayerContextProvider;
