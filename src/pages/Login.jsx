import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import apple from "../assets/image/apple.png";
import facebook from "../assets/image/facebook.png";
import google from "../assets/image/google.png";
import Button from "../components/Button";
import Loader from "../assets/icon/playWhite.gif";
import Navbar from "../components/Navbar";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { email, password };
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Opsional, gunakan jika backend mendukung session/cookie
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to login");
      }

      const data = await response.json();
      console.log("User ditemukan:", data);

      // Simpan informasi login ke localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(data.user)); // Pastikan backend mengirim data user

      // Arahkan ke halaman utama
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message || "Email atau Password Salah!");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <section id="login" className="login flex flex-col justify-center pt-16 relative items-center h-dvh">
        <div className="w-full md:w-3/4 xl:w-1/2 px-8">
          <div className="w-full p-8 flex flex-col justify-center items-center gap-8">
            <p className="text-5xl text-neutral-800 font-black">Log in</p>
            <form method="post" className="mt-2 flex flex-col gap-8 w-3/4" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-neutral-800" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-transparent border-2 py-3 px-5 rounded-lg text-sm border-based-1 outline-offset-0 text-neutral-800 focus:outline-primary focus:outline-2 focus:outline-offset-2 transition-all duration-200"
                    placeholder="Masukkan Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-neutral-800" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      id="password"
                      className="w-full bg-transparent border-2 py-3 px-5 rounded-lg text-sm border-based-1 outline-offset-0 text-neutral-800 focus:outline-primary focus:outline-2 focus:outline-offset-2 transition-all duration-200"
                      placeholder="Masukkan Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 text-2xl text-neutral-800" onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? (
                        <p>
                          <IoEyeOutline />
                        </p>
                      ) : (
                        <p>
                          <IoEyeOffOutline />
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 justify-end items-center">
                  <div className="inline-flex items-center">
                    <label className="text-neutral-800 text-center text-base cursor-pointer" htmlFor="check">
                      Forgotten Passowrd?
                    </label>
                  </div>
                </div>
                {errorMessage && <p className="text-red-400 underline-offset-2 underline text-xs text-center font-bold">{errorMessage}</p>}
              </div>

              <Button type={"submit"} title={isLoading ? <img src={Loader} className="h-full mx-auto" /> : <p>Login</p>}></Button>
            </form>
            <div className="flex flex-col gap-4 items-center">
              <p className="text-neutral-800 text-center text-base">or</p>
              <div className="flex gap-4">
                <img src={facebook} className="w-14 h-14 cursor-pointer" alt="" />
                <img src={google} className="w-14 h-14 cursor-pointer" alt="" />
                <img src={apple} className="w-14 h-14 cursor-pointer" alt="" />
              </div>
              <p className="text-neutral-800 text-center text-base">
                Not registered on Sonata yet?{" "}
                <span>
                  <Link className="text-primary" to={"/register"}>
                    Sign Up
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
