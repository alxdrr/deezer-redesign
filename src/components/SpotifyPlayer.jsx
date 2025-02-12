import React, { useEffect, useState, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { use } from "react";
const SpotifyPlayer = ({ token }) => {
  const [player, setPlayer] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const { musicID, pause, playStatus } = useContext(PlayerContext);
  const [isPlaying, setIsPlaying] = useState(playStatus);

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const newPlayer = new window.Spotify.Player({
        name: "Sonata Web Player",
        getOAuthToken: (cb) => cb(token),
        volume: 0.5,
      });

      setPlayer(newPlayer);

      newPlayer.addListener("ready", ({ device_id }) => {
        console.log("Device ID:", device_id);
        setDeviceId(device_id);
      });

      newPlayer.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      newPlayer.addListener("player_state_changed", (state) => {
        if (!state) return;
        setIsPlaying(!state.paused);
      });

      newPlayer.connect();
    };
  }, [token]);

  const playSong = async (spotifyUri) => {
    if (!deviceId) return;

    await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uris: [spotifyUri] }),
    });
  };
  const pauseSong = async () => {
    await fetch("https://api.spotify.com/v1/me/player/pause", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`, // Pastikan token valid
      },
    });
  };
  const resumeSong = async () => {
    await fetch("https://api.spotify.com/v1/me/player/play", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  useEffect(() => {
    const togglePlayPause = async () => {
      if (isPlaying) {
        await pauseSong();
      } else {
        await playSong(`spotify:track:${musicID}`);
      }
    };
    togglePlayPause();
  }, [playStatus]);

  return <></>;
};

export default SpotifyPlayer;
