import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/object/songsData";
import axios from "axios";
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[9]);
  const [playStatus, setPlayStatus] = useState(false);
  const [repeatStatus, setRepeatStatus] = useState(false);
  const [story, setStory] = useState("Crafting the story behind your song... Hang tight!");
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: { second: 0, minute: 0 },
  });

  const [volume, setVolume] = useState(1);
  const generateStory = async () => {
    setStory("Crafting the story behind your song... Hang tight!"); // Reset pesan sebelum memulai permintaan
    try {
      const response = await axios.post("http://127.0.0.1:8000/get-song-story", {
        artist: track.artist,
        title: track.name,
      });
      setStory(response.data.story);
    } catch (error) {
      setStory("Failed to load the story. Please try again.");
      console.error("Error fetching story:", error);
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

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };
  useEffect(() => {
    generateStory();
  }, [track]);
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
    play,
    pause,
    repeatStatus,
    repeat,
    playWithId,
    previous,
    next,
    seekSong,
    handleEnded,
  };
  return <PlayerContext.Provider value={contextValue}>{props.children}</PlayerContext.Provider>;
};

export default PlayerContextProvider;
