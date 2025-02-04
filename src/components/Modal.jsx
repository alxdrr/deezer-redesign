import React, { useState, useEffect } from "react";
import { Input, Option, Select, Dialog, Textarea, IconButton, Typography, DialogBody, DialogHeader, DialogFooter } from "@material-tailwind/react";
import Button from "../components/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
export function Modal({ state, setState, onPlaylistCreated }) {
  const handleOpen = () => setState(!state);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    setLoading(true); // Set loading state

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/playlist/create",
        {
          playlist_name: name,
          user: user.email,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("Playlist created:", response.data);

      // Panggil callback untuk memberi tahu bahwa playlist baru telah dibuat
      if (onPlaylistCreated) {
        onPlaylistCreated({
          playlist_id: response.data.playlist_id,
          playlist_name: response.data.playlist_name,
          // Tambahkan properti lain jika ada
        });
      }

      // Reset form
      setName("");
    } catch (error) {
      setError(error.response?.data?.error || error.message); // Tangani kesalahan
    } finally {
      setLoading(false); // Set loading state kembali ke false
      handleOpen(); // Tutup modal
    }
  };

  return (
    <>
      <Dialog size="sm" open={state} handler={handleOpen} className="p-4 bg-neutral-0">
        <DialogHeader className="relative m-0 block">
          <h1 className="text-3xl text-neutral-800 font-black">Create Playlist</h1>
          <IconButton size="sm" variant="text" className="!absolute right-3.5 top-3.5" onClick={handleOpen}>
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody>
          <form method="post" onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-base font-bold text-neutral-800" htmlFor="text">
                Name
              </label>
              <input
                type="text"
                name="text"
                id="text"
                className="bg-transparent border-2 py-3 px-5 rounded-lg text-sm border-based-1 outline-offset-0 text-neutral-800 focus:outline-primary focus:outline-2 focus:outline-offset-2 transition-all duration-200"
                placeholder="Playlist Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base font-bold text-neutral-800" htmlFor="desc">
                Description (optional)
              </label>

              <Textarea
                type="textArea"
                name="desc"
                id="desc"
                className="bg-transparent border-2 py-3 px-5 rounded-lg text-sm border-based-1 outline-offset-0 text-neutral-800 focus:outline-primary focus:outline-2 focus:outline-offset-2 transition-all duration-200"
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                autoComplete="off"
              />
            </div>
            <button className="bg-primary rounded-xl text-white py-2" type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Playlist"}
            </button>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default Modal;
