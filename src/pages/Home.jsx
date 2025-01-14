import Avatar from "../assets/image/profile.jpg";
import MiniSongCard from "../components/MiniSongCard";
import DailyPlaylistCard from "../components/DailyPlaylistCard";
import { songsData } from "../assets/object/songsData";

const home = ({ isOpen }) => {
  return (
    <div className="w-full mx-auto p-4 xl:p-10 flex flex-col gap-8 overflow-y-auto">
      <div className="w-full h-auto flex flex-col gap-8">
        <div className="flex gap-8 items-center">
          <img src={Avatar} alt="" className="rounded-full w-32" />
          <div className="flex flex-col">
            <p className="text-4xl text-neutral-800 font-black">Good Evening</p>
            <p className="text-neutral-500">Let's explore some new tracks here</p>
          </div>
        </div>
        <div className={`grid  ${isOpen ? "lg:grid-cols-1 xl:grid-cols-2" : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"}  gap-4`}>
          {songsData.map((item, index) => (
            <MiniSongCard key={index} title={item.name} artist={item.artist} duration={item.duration} image={item.image} id={item.id} />
          ))}
        </div>
      </div>
      <div className="h-auto w-auto gap-2.5 flex flex-col">
        <h1 className="text-3xl text-neutral-800 font-black">Discover</h1>
        <div className={`grid gap-4 ${isOpen ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-3 md:grid-cols-4 xl:grid-cols-5"}`}>
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
        </div>
      </div>
      <div className="h-auto gap-2.5 flex flex-col">
        <h1 className="text-3xl text-neutral-800 font-black">Made For You</h1>
        <div className={`grid gap-4 ${isOpen ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-3 md:grid-cols-4 xl:grid-cols-5"}`}>
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
          <DailyPlaylistCard />
        </div>
      </div>
    </div>
  );
};

export default home;
