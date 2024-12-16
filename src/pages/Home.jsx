import React from "react";
import Avatar from "../assets/image/PlaylistCover.png";
import MiniSongCard from "../components/MiniSongCard";
import DailyPlaylistCard from "../components/DailyPlaylistCard";

const home = () => {
  return (
    <div className="w-full h-0 flex flex-col gap-8 overflow-y-auto grow px-16 py-4">
      <div className="w-full h-auto">
        <div className="flex px-3 py-4 gap-8 items-center">
          <img src={Avatar} alt="" className="rounded-full w-32" />
          <div className="flex flex-col">
            <p className="text-6xl text-neutral-800 font-black">
              Good Evening Zelig
            </p>
            <p className="text-neutral-500">
              Let's explore some new tracks here
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <MiniSongCard />
          <MiniSongCard />
          <MiniSongCard />
          <MiniSongCard />
          <MiniSongCard />
          <MiniSongCard />
        </div>
      </div>
      <div className="h-auto gap-2.5">
        <h1 className="text-3xl text-neutral-800 font-black">Discover</h1>
        <div className="flex flex-wrap gap-4 h-auto">
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
      <div className="h-auto gap-2.5">
        <h1 className="text-3xl text-neutral-800 font-black">Made For You</h1>
        <div className="flex flex-wrap gap-4 h-auto">
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
