import { useState } from "react";
import Avatar from "../assets/image/profile.jpg";
import Loader from "../assets/icon/Ring.svg";
import { FaRegHeart, FaRegShareFromSquare, FaEllipsisVertical } from "react-icons/fa6";
import PlayButton from "../assets/icon/playbutton.svg";
import Plus from "../assets/icon/plusSquare.svg";

const Playlist = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    setLoading(true); // Set loading state
  };
  return (
    <div className="w-full h-full flex flex-col gap-8 overflow-y-auto grow px-16 py-4">
      <div className="flex px-3 py-4 gap-8 items-center">
        <img src={Avatar} alt="" className="w-52" />
        <div className="flex flex-col gap-4 justify-between">
          <p className="text-6xl text-neutral-800 font-black">My Playlist</p>
          <div className="flex gap-2 items-center">
            <img src={Avatar} alt="Avatar" className="rounded-full object-cover w-12 h-12" />
            <p>John Doe</p>
          </div>
          <p className="text-neutral-500">2 Tracks | 7 Minutes</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 text-2xl text-neutral-800 items-center w-full">
          <img src={PlayButton} alt="" className="h-full" />
          <FaRegHeart className="w-5 h-5" />
          <FaRegShareFromSquare className="w-5 h-5" />
          <FaEllipsisVertical className="w-5 h-5" />
        </div>
        <form method="post" className="flex flex-col gap-8 w-2/6">
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
      </div>
      <table className="table-fixed">
        <thead className="border border-neutral-300 border-x-0 border-t-0">
          <tr>
            <th className="text-primary w-2/6 text-start font-normal py-3">TRACK</th>
            <th className="text-primary w-1/6 text-start font-normal py-3">ARTIST</th>
            <th className="text-primary w-1/6 text-start font-normal py-3">ALBUM</th>
            <th className="text-primary w-1/6 text-start font-normal py-3">ADDED</th>
            <th className="text-primary w-1/6 text-start font-normal py-3">DURATION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-neutral-800 w-2/6 flex items-center gap-4 py-2">
              <img src={Avatar} alt="" className="w-12" />
              <p>Song 1</p>
            </td>
            <td className="text-neutral-800 w-1/6">Artist 1</td>
            <td className="text-neutral-800 w-1/6">Album 1</td>
            <td className="text-neutral-800 w-1/6">12/12/2023</td>
            <td className="text-neutral-800 w-1/6">19:32</td>
          </tr>
          {/* Add Tracks */}
          <tr className="cursor-pointer">
            <td className="text-neutral-800 w-2/6 flex items-center gap-4 py-2">
              <img src={Plus} alt="" className="w-12 hover:brightness-75 duration-200 transition-all" />
              <p>Add track</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Playlist;
