import React, { useState, useEffect } from "react";
import { Input, Option, Select, Dialog, Textarea, IconButton, Typography, DialogBody, DialogHeader, DialogFooter } from "@material-tailwind/react";
import Button from "../components/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";
export function Modal({ state, setState }) {
  const handleOpen = () => setState(!state);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

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
          <form method="post" className="flex flex-col gap-4">
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
          </form>
        </DialogBody>
        <DialogFooter>
          <Button variant={"primary"} type={"clickable"} title={"Create"}></Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Modal;
