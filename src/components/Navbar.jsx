import React from "react";
import { Link } from "react-router";
import logo from "../assets/image/LogoBlack.png";
import Button from "../components/Button";
const Navbar = () => {
  return (
    <section id="navbar">
      <div className="fixed w-screen bg-white backdrop-blur-sm mx-auto px-0 md:px-4 lg:px-32 py-4 border-b-2 border-based-1 z-20">
        <div className="hidden lg:flex justify-between items-center z-10">
          <Link className="z-10" to={"/"}>
            <img className="h-10" src={logo} alt="" />
          </Link>
          <div className="flex justify-between gap-14  text-neutral-800">
            <Link className="z-10 hover:text-primary" to={"/"}>
              Plans
            </Link>
            <Link className="z-10 hover:text-primary" to={"/explore"}>
              Features
            </Link>
            <Link className="z-10 hover:text-primary" to={"/about-us"}>
              Music
            </Link>
          </div>
          <div className="flex gap-2">
            <Button link={"/login"} title={"Log in"}></Button>
            <Button link={"/signup"} title={"Sign up"}></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
