import React from "react";
import Button from "./Button";
import MiniPlaylist from "./MiniPlaylist";
import Logo from "../assets/image/LogoBlack.png";
import IconHome from "../assets/icon/sidebar-home.svg";
import IconExplore from "../assets/icon/sidebar-explore.svg";
import IconCollection from "../assets/icon/sidebar-collection.svg";
const sidebar = () => {
  return (
    <div className="flex flex-col w-1/3 max-w-xs px-6 py-8 h-dvh border-r-2">
      <div className="w-full flex flex-col gap-8 h-auto">
        <img src={Logo} alt="Logo" className="max-w-32" />
        <ul>
          <li className="flex gap-4 text-primary mb-4">
            <img src={IconHome} alt="" />
            <p className="font-bold">Home</p>
          </li>
          <li className="flex gap-4 text-neutral-500 mb-4">
            <img src={IconExplore} alt="" />
            <p className="font-bold">Explore</p>
          </li>
          <li className="flex gap-4 text-neutral-500">
            <img src={IconCollection} alt="" />
            <p className="font-bold">Collection</p>
          </li>
        </ul>
        <div className="w-full flex flex-col px-4 py-5 text-white bg-primary rounded-lg gap-4">
          <p className="text-xs">
            You’re on Deezer Free. Upgrade & Feel the premium benefit for 1
            month free
          </p>
          <Button
            variant={"primary"}
            type={"clickable"}
            title={"Subscirbe"}
          ></Button>
        </div>
      </div>
      <div id="container" className="flex flex-col gap-8 py-8 grow">
        <Button
          variant={"primary"}
          type={"clickable"}
          title={"New Playlist"}
        ></Button>
        <div
          id="playlist"
          className="flex flex-col gap-4 overflow-y-auto h-0 grow"
        >
          <MiniPlaylist></MiniPlaylist>
          <MiniPlaylist></MiniPlaylist>
          <MiniPlaylist></MiniPlaylist>
          <MiniPlaylist></MiniPlaylist>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
