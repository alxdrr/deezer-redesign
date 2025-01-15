import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import logo from "../assets/image/LogoBlack.png";
import Button from "../components/Button";

const Navbar = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);

  return (
    <section id="navbar">
      <div className="fixed w-screen bg-white backdrop-blur-sm mx-auto px-0 md:px-4 lg:px-32 py-4 border-b-2 border-based-1 z-20">
        <div className="hidden lg:flex justify-between items-center z-10">
          {/* Logo */}
          <Link className="z-10" to={"/"}>
            <img className="h-10" src={logo} alt="Logo" />
          </Link>

          {/* Links */}
          <div className={`flex justify-between gap-14 text-neutral-800 ${location.pathname === "/" ? "" : "hidden"}`}>
            <Link className={`z-10 hover:text-primary/50 ${location.pathname === "/" ? "text-primary" : ""}`} to={"/"}>
              Plans
            </Link>
            <Link className="z-10 hover:text-primary" to={"/explore"}>
              Features
            </Link>
            <Link className="z-10 hover:text-primary" to={"/home"}>
              Music
            </Link>
          </div>

          {/* User Info or Login/Sign Up */}
          {user ? (
            <p>{`Welcome, ${user.name}`}</p>
          ) : (
            <div className={`flex gap-2 ${location.pathname !== "/" ? "hidden" : ""}`}>
              <Button link={"/login"} title={"Log in"} />
              <Button link={"/register"} title={"Sign up"} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
