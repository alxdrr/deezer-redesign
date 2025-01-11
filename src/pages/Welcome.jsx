import React, { useState, useNavigate, useEffect } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router";
import logo from "../assets/image/LogoBlack.png";
import apple from "../assets/image/apple.png";
import facebook from "../assets/image/facebook.png";
import avatar from "../assets/image/PlaylistCover.png";
import google from "../assets/image/google.png";
import Button from "../components/Button";
import Loader from "../assets/icon/Ring.svg";
import Navbar from "../components/Navbar";
import axios from "axios";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //   const navigate = useNavigate();

  const [token, setToken] = useState(null);
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
  const [query, setQuery] = useState("");
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    setError(null); // Reset error state
    setLoading(true); // Set loading state

    try {
      const results = await searchArtists(query, token);
      setArtists(results);
    } catch (err) {
      setError(err.message); // Simpan pesan error
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const searchArtists = async (query, accessToken) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          query
        )}&type=artist`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data.artists.items;
    } catch (error) {
      console.error("Failed to search artists:", error.message);
      throw error; // Propagate the error for the caller to handle
    }
  };

  return (
    <div>
      <Navbar />
      <section
        id="login"
        className="login flex flex-col justify-center pt-16 relative items-center h-dvh"
      >
        <div className="w-full px-8">
          <div className="w-full p-8 flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col gap-2 items-center">
              <p className="text-5xl text-neutral-800 font-black">Welcome</p>
              <p className="text-base font-normal text-neutral-800">
                Choose your favorite artist for more personalised
                recommendations
              </p>
            </div>
            <div className="flex flex-col gap-6 w-full items-center">
              <form method="post" className="mt-2 flex flex-col gap-8 w-2/6">
                <div className="w-full flex flex-col gap-5">
                  <div className="flex relative flex-col gap-2">
                    <span className="absolute left-0 flex inset-y-0 items-center pl-2">
                      <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-outline"
                        onClick={handleSearch}
                        disabled={loading}
                      >
                        {loading ? (
                          <img src={Loader} alt="" />
                        ) : (
                          <svg
                            fill="none"
                            stroke="#ADB5BD"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                          >
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                        )}
                      </button>
                    </span>
                    <input
                      type="query"
                      name="query"
                      id="query"
                      className="bg-transparent w-full border-2 py-3 px-12 rounded-lg text-base border-based-1 outline-offset-0 text-neutral-800 focus:outline-primary focus:outline-2 focus:outline-offset-2 transition-all duration-200"
                      placeholder="Search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  {errorMessage && (
                    <p className="text-wrongSelected underline-offset-2 underline text-xs text-center font-bold">
                      {errorMessage}
                    </p>
                  )}
                </div>
              </form>
              <div className="flex w-full gap-4 items-center justify-center">
                <Button variant={"outline"} title={"JAZZ"}></Button>
                <Button variant={"outline"} title={"POP"}></Button>
                <Button variant={"outline"} title={"ROCK"}></Button>
                <Button variant={"outline"} title={"R&B"}></Button>
                <Button variant={"outline"} title={"HIP-HOP"}></Button>
                <Button variant={"outline"} title={"ELECTRO"}></Button>
                <Button variant={"outline"} title={"INDIE"}></Button>
                <Button variant={"outline"} title={"DANCE"}></Button>
                <Button variant={"outline"} title={"BLUES"}></Button>
                <Button variant={"outline"} title={"METAL"}></Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full items-center">
              {/* <p className="text-2xl text-primary font-black">
                Recommended Artist
              </p> */}

              <div className="flex gap-4 w-full flex-wrap items-center justify-center">
                {artists.map((artist) => (
                  <div
                    key="id"
                    className="flex flex-col gap-4 items-center justify-center"
                  >
                    <img
                      src={
                        artist.images.length > 0 ? artist.images[0].url : avatar
                      }
                      alt={artist.name}
                      className="rounded-full w-40 h-40 object-fit"
                    />
                    <p className="text-base font-normal text-neutral-800">
                      {artist.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Button title={"Continue"} link={"/home"}></Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
