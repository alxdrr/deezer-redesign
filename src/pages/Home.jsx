import Avatar from "../assets/image/profile.jpg";
import MiniSongCard from "../components/MiniSongCard";
import DailyPlaylistCard from "../components/DailyPlaylistCard";
import Accoustic from "../assets/image/discover/Accoustic.png";
import Concert from "../assets/image/discover/Concert.png";
import Nature from "../assets/image/discover/Nature.png";
import Piano from "../assets/image/discover/Piano.png";
import Vintage from "../assets/image/discover/Vintage.png";
import Classical from "../assets/image/discover/Classical.png";
import Lofi from "../assets/image/discover/Lofi.png";
import Jazz from "../assets/image/discover/Jazz.png";
import Instrument from "../assets/image/discover/Instrument.png";
import Country from "../assets/image/discover/Country.png";
import Back from "../assets/image/discover/Back.png";
import Daily from "../assets/image/discover/Daily.png";
import Fav from "../assets/image/discover/Fav.png";
import Mix from "../assets/image/discover/Mix.png";
import Hits from "../assets/image/discover/Hits.png";
import { songsData } from "../assets/object/songsData";
import { useState, useEffect } from "react";

const Home = ({ isOpen }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);
  const currentHour = new Date().getHours(); // Mendapatkan jam saat ini
  let greeting;

  // Menentukan sapaan berdasarkan jam
  if (currentHour < 10 && currentHour >= 5) {
    greeting = "Good Morning";
  } else if (currentHour < 18 && currentHour >= 10) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <div className="w-full mx-auto p-4 xl:p-10 flex flex-col gap-8 overflow-y-auto">
      <div className="w-full h-auto flex flex-col gap-8">
        <div className="flex gap-8 items-center">
          <img src={Avatar} alt="" className="rounded-full w-52" />
          <div className="flex flex-col">
            <p className="text-6xl text-neutral-800 font-black">{`${greeting}, ${user.name}!`}</p>
            <p className="text-neutral-500">Let's explore some new tracks here</p>
          </div>
        </div>
        <div className="h-auto w-auto gap-2.5 flex flex-col">
          <h1 className="text-3xl text-neutral-800 font-black">Continue Streaming</h1>
          <div className={`grid  ${isOpen ? "lg:grid-cols-1 xl:grid-cols-2" : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"}  gap-4`}>
            {songsData.map((item, index) => (
              <MiniSongCard key={index} title={item.name} artist={item.artist} duration={item.duration} image={item.image} id={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-auto w-auto gap-2.5 flex flex-col">
        <h1 className="text-3xl text-neutral-800 font-black">Discover</h1>
        <div className={`grid gap-4 ${isOpen ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-3 md:grid-cols-4 xl:grid-cols-5"}`}>
          <DailyPlaylistCard image={Accoustic} text={"Accoustic"} />
          <DailyPlaylistCard image={Concert} text={"Concert"} />
          <DailyPlaylistCard image={Nature} text={"Nature"} />
          <DailyPlaylistCard image={Piano} text={"Piano"} />
          <DailyPlaylistCard image={Vintage} text={"Vintage"} />
          <DailyPlaylistCard image={Classical} text={"Classical"} />
          <DailyPlaylistCard image={Country} text={"Country"} />
          <DailyPlaylistCard image={Jazz} text={"Jazz"} />
          <DailyPlaylistCard image={Lofi} text={"Lofi"} />
          <DailyPlaylistCard image={Instrument} text={"Instrument"} />
        </div>
      </div>
      <div className="h-auto gap-2.5 flex flex-col">
        <h1 className="text-3xl text-neutral-800 font-black">Made For You</h1>
        <div className={`grid gap-4 ${isOpen ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-3 md:grid-cols-4 xl:grid-cols-5"}`}>
          <DailyPlaylistCard image={Back} text={"Back"} />
          <DailyPlaylistCard image={Daily} text={"Daily"} />
          <DailyPlaylistCard image={Fav} text={"Fav"} />
          <DailyPlaylistCard image={Mix} text={"Mix"} />
          <DailyPlaylistCard image={Hits} text={"Hits"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
