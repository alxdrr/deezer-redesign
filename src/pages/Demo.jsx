import React, { useEffect, useState } from "react";

const CLIENT_ID = "465d0f050b12484697177ff5238d3226"; // Ganti dengan Client ID Anda
const REDIRECT_URI = "http://localhost:5173/demo"; // Sesuaikan dengan URL aplikasi Anda
const SCOPES = "streaming user-read-email user-read-private user-modify-playback-state user-read-playback-state";

const SpotifyPlayer = () => {
  const [token, setToken] = useState(null);
  const [player, setPlayer] = useState(null);

  // Fungsi untuk mendapatkan token akses melalui Implicit Grant Flow
  const getAccessToken = () => {
    const hash = window.location.hash;
    let token = null;

    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      token = params.get("access_token");
      window.history.pushState("", document.title, window.location.pathname); // Hapus hash dari URL
    }

    if (!token) {
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token&show_dialog=true`;
      window.location.href = authUrl;
    }

    return token;
  };

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  useEffect(() => {
    if (!token) return;

    // Memastikan SDK dimuat
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const newPlayer = new window.Spotify.Player({
        name: "Web Playback SDK Player",
        getOAuthToken: (cb) => cb(token),
        volume: 0.5,
      });

      // Menghubungkan pemutar
      newPlayer.connect();

      // Menangani event pemutar
      newPlayer.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      newPlayer.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      setPlayer(newPlayer); // Simpan referensi pemutar
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [token]);

  const togglePlay = () => {
    if (player) {
      player.togglePlay().catch((error) => console.error("Error toggling playback:", error));
    }
  };

  return (
    <div>
      <h1>Spotify Web Playback SDK</h1>
      {token ? <button onClick={togglePlay}>Toggle Play</button> : <p>Loading...</p>}
    </div>
  );
};

export default SpotifyPlayer;
