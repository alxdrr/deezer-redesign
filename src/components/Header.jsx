import PlaylistCover from "../assets/image/PlaylistCover.png";
import { useContext, useState, useCallback } from "react";
import Loader from "../assets/icon/Ring.svg";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { PlayerContext } from "../context/PlayerContext";
import axios from "axios";

const Header = () => {
  const { setQuery, query, loading, handleSearch } = useContext(PlayerContext);
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(false);

  const handleAvatar = useCallback(() => {
    setAvatar(!avatar);
  }, [avatar]);

  const logout = useCallback(async () => {
    try {
      // Panggil backend untuk menghapus session
      await axios.post("http://127.0.0.1:8000/api/users/logout", {}, { withCredentials: true });

      // Hapus data login dari localStorage
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");

      // Redirect ke halaman login
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.response?.data?.error || error.message);
    }
  }, [navigate]);

  return (
    <div className="w-full border-b-2 flex justify-between px-8 py-4  items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Mencegah reload halaman
          handleSearch(); // Panggil fungsi pencarian
          navigate("/search"); // Arahkan ke halaman Search
        }}
        method="post"
        className="flex flex-col gap-8 w-2/6"
      >
        <div className="w-full flex flex-col gap-5">
          <div className="flex relative flex-col gap-2">
            <span className="absolute left-0 flex inset-y-0 items-center pl-2">
              <button type="submit" className="p-1 focus:outline-none focus:shadow-outline" disabled={loading}>
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
              type="text"
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
        <div className="relative">
          <img src={PlaylistCover} alt="Avatar" className="rounded-full object-cover w-12 h-12 relative inline-block" data-popover-target="profile-menu" onClick={handleAvatar} />
          <AnimatePresence>
            {avatar && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute right-4 top-12 z-30 bg-white min-w-[320px] overflow-auto rounded-lg border border-slate-200 p-1 shadow-lg"
              >
                <ul data-popover="profile-menu" data-popover-placement="bottom">
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-2.5 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                    <div className="flex gap-1 items-center">
                      <img src={PlaylistCover} alt="Avatar" className="rounded-full object-cover w-8 h-8 relative inline-block" data-popover-target="profile-menu" />
                      <p className="text-slate-800 font-regular ml-2">My Profile</p>
                    </div>
                  </li>
                  <hr className="my-2 border-slate-200" />
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-2.5 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                    <p className="text-slate-800 font-regular ml-2">Account settings</p>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-2.5 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                    <p className="text-slate-800 font-regular ml-2">Dark Mode</p>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-2.5 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                    <p className="text-slate-800 font-regular ml-2">Manage my subscription</p>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-2.5 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                    <p className="text-slate-800 font-regular ml-2">Manage my exclusions</p>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-2.5 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                    <p className="text-slate-800 font-regular ml-2">Activate a code</p>
                  </li>
                  <li
                    className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-2.5 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                    onClick={() => logout()}
                  >
                    <p className="text-red-400 font-regular ml-2">Log Out</p>
                  </li>
                </ul>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;
