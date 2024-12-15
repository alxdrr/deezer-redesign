import React from "react";
import PlaylistCover from "../assets/image/PlaylistCover.png";

const Header = () => {
  return (
    <div className="w-full border-b-2 flex justify-between px-8 py-4 max-h-16 items-center">
      <form action="" method="" className="">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <button
              type=""
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="rgb(85 106 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <div className="rounded-lg border-primary border-2">
            <input
              type="search"
              name="q"
              className="py-2.5 px-6 w-full rounded-lg text-xs text-white bg-landing pl-12 focus:outline-none focus:text-gray-900"
              placeholder="Track, artist, album..."
              autocomplete="off"
            />
          </div>
        </div>
      </form>
      <div className="flex gap-4 items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM12 2C16.97 2 21 6.043 21 11.031V20H3V11.031C3 6.043 7.03 2 12 2ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z"
            fill="#343A40"
          />
        </svg>

        <img
          src={PlaylistCover}
          alt="Avatar"
          className="rounded-full object-cover w-12 h-12"
        />
      </div>
    </div>
  );
};

export default Header;
