import React from "react";
import Avatar from "../assets/album-cover/Album6.jpg";

const Information = () => {
  return (
    <div className="absolute w-auto max-w-xs right-0 top-16 h-[89%] bg-slate-200 flex flex-col gap-2 overflow-y-auto grow px-2 py-2 z-20">
      <div className="flex relative flex-col bg-white rounded-lg w-full gap-2 px-3 py-3 shadow-2 transition-colors duration-150 cursor-pointer items-center">
        <img
          src={Avatar}
          alt="Cover"
          className="w-full rounded-lg z-10 transition-opacity duration-300"
        />
        <div className="flex flex-col bottom-6 absolute left-6 w-auto">
          <h1 className="text-sm text-neutral-0 z-20 font-bold">About You</h1>
          <p className="text-[10px] z-20 w-auto text-white">The 1975</p>
        </div>
      </div>
      <div className="flex relative flex-col bg-white rounded-lg w-full gap-2 px-3 py-3 shadow-2 transition-colors duration-150 cursor-pointer">
        <h1 className="text-3xl text-neutral-800 font-black">Artist</h1>
        <div className="relative">
          <img
            src={Avatar}
            alt="Cover"
            className="w-full max-h-24 rounded-lg z-10 transition-opacity duration-300"
          />
          <div className="flex flex-col top-3 absolute left-3 w-auto">
            <h1 className="text-sm text-neutral-0 z-20 font-bold">The 1975</h1>
            <p className="text-[10px] z-20 w-auto text-white">
              19,324,232 Monthly Listener
            </p>
          </div>
          <p className="text-neutral-600 text-xs pt-2">
            The 1975 is an English pop-rock band known for their genre-blending
            sound and thought-provoking lyrics. Formed in 2002, the band
            features Matty Healy (vocals), Adam Hann (guitar), Ross MacDonald
            (bass), and George Daniel (drums).
          </p>
        </div>
      </div>
      <div className="flex relative flex-col bg-white rounded-lg w-full gap-2 px-3 py-3 shadow-2 transition-colors duration-150 cursor-pointer">
        <h1 className="text-3xl text-neutral-800 font-black">Story</h1>
        <div className="relative">
          <img
            src={Avatar}
            alt="Cover"
            className="w-full rounded-lg z-10 transition-opacity duration-300"
          />
          <div className="flex flex-col top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 w-full text-center px-6 leading-5">
            <p className="text-[10px] z-20 w-auto text-white">
              "About You" by The 1975 is a hauntingly emotional track from the
              band's fifth studio album, Being Funny in a Foreign Language. The
              song features lush instrumentation, layered with reverb-drenched
              guitars and ethereal synths, creating a dreamy yet melancholic
              atmosphere. Matty Healy's poignant vocals narrate themes of love,
              loss, and longing, as the lyrics explore the lingering emotions
              tied to a past relationship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
