import React from "react";
import Button from "./Button";
import MiniPlaylist from "./MiniPlaylist";
import Logo from "../assets/image/LogoBlack.png";
import { Link, useLocation } from "react-router";
import { IoSearch } from "react-icons/io5";
import { BiHomeAlt2, BiCollection } from "react-icons/bi";
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col w-1/3 max-w-xs px-6 py-8 h-full border-r-2">
      <div className="w-full flex flex-col gap-4 h-auto">
        <img src={Logo} alt="Logo" className="max-w-32" />
        <ul>
          <Link to={"/home"}>
            <li className={`flex gap-4 items-center mb-4 hover:text-primary duration-100 cursor-pointer ${location.pathname === "/home" ? "text-primary" : "text-neutral-500"}`}>
              <BiHomeAlt2 />
              <p className="font-bold">Home</p>
            </li>
          </Link>
          <Link to={"/explore"}>
            <li className={`flex gap-4 items-center mb-4 hover:text-primary duration-100 cursor-pointer ${location.pathname === "/explore" ? "text-primary" : "text-neutral-500"}`}>
              <IoSearch />
              <p className="font-bold">Explore</p>
            </li>
          </Link>
          <Link to={"/collection"}>
            <li
              className={`flex gap-4 items-center mb-4 hover:text-primary duration-100 cursor-pointer ${location.pathname === "/colleciton" ? "text-primary" : "text-neutral-500"}`}
            >
              <BiCollection />
              <p className="font-bold">Collection</p>
            </li>
          </Link>
        </ul>
        <div className="w-full flex flex-col px-4 py-5 text-white bg-primary rounded-lg gap-4">
          <p className="text-xs">You’re on Deezer Free. Upgrade & Feel the premium benefit for 1 month free</p>
          <Button variant={"outline"} type={"clickable"} title={"Subscirbe"}></Button>
        </div>
      </div>
      <div id="container" className="flex flex-col gap-2 py-2 grow">
        <Button variant={"outline"} type={"clickable"} title={"New Playlist"}></Button>
        <div id="playlist" className="flex flex-col gap-4 overflow-y-auto h-0 grow">
          <Link to={"/playlist"}>
            <MiniPlaylist />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
