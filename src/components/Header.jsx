import PlaylistCover from "../assets/image/PlaylistCover.png";
import { useState, useEffect } from "react";
import Loader from "../assets/icon/Ring.svg";
import axios from "axios";
import { useNavigate } from "react-router";

const Header = ({ results, setResults }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const client_id = "465d0f050b12484697177ff5238d3226"; // Replace with your Client ID
  const client_secret = "be7cdee0d3f14182accbad398e70f645"; // Replace with your Client Secret

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

  const search = async (query, accessToken) => {
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=artist%2Calbum%2Cplaylist%2Ctrack&limit=10`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const result = [data.tracks.items, data.artists.items, data.albums.items, data.playlists.items];
      return result;
    } catch (error) {
      console.error("Failed to search artists:", error.message);
      throw error; // Propagate the error for the caller to handle
    }
  };

  const handleSearch = async () => {
    setLoading(true); // Set loading state
    try {
      // const resultsQuery = await search(query, token);
      // setResults(resultsQuery);
      const response = await axios.post("http://127.0.0.1:8000/search-tracks/", { query: query, token: token });
      setResults(response.data);
    } catch (err) {
      setError(err.message); // Simpan pesan error
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="w-full border-b-2 flex justify-between px-8 py-4 max-h-16 items-center">
      <form onClick={() => navigate("/search")} method="post" className="flex flex-col gap-8 w-2/6">
        <div className="w-full flex flex-col gap-5">
          <div className="flex relative flex-col gap-2">
            <span className="absolute left-0 flex inset-y-0 items-center pl-2">
              <button type="submit" className="p-1 focus:outline-none focus:shadow-outline" onClick={handleSearch} disabled={loading}>
                {loading ? (
                  <img src={Loader} alt="" />
                ) : (
                  <svg fill="none" stroke="#ADB5BD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                )}
              </button>
            </span>
            <input
              type="query"
              name="query"
              id="query"
              className="bg-transparent w-full border-2 py-1 px-12 rounded-lg text-base border-based-1 outline-offset-0 text-neutral-800 focus:outline-primary focus:outline-2 focus:outline-offset-2 transition-all duration-200"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>
      </form>
      <div className="flex gap-4 items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM12 2C16.97 2 21 6.043 21 11.031V20H3V11.031C3 6.043 7.03 2 12 2ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z"
            fill="#343A40"
          />
        </svg>

        <img src={PlaylistCover} alt="Avatar" className="rounded-full object-cover w-12 h-12" />
      </div>
    </div>
  );
};

export default Header;
