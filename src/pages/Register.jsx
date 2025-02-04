import { useState } from "react";
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
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState("male");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Reset error message
    setIsLoading(true); // Set loading state awal

    // Validasi field
    if (!email || !password || !gender || !dob || !name) {
      setErrorMessage("Semua field harus diisi.");
      setIsLoading(false); // Reset loading state
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Password dan konfirmasi password tidak cocok.");
      setIsLoading(false); // Reset loading state
      return;
    }

    const userData = { email, password, gender, dob, name };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Untuk mengirim cookies jika ada
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Response error:", errorData);
        setErrorMessage(errorData.error || "Gagal melakukan registrasi."); // Tampilkan pesan error dari backend
        return; // Hentikan eksekusi jika ada error
      }

      const data = await response.json(); // Ambil respons berhasil
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: name,
          email: email,
          gender: gender,
          dob: dob,
        })
      );
      console.log("User ditemukan:", data);
      navigate("/welcome"); // Navigasi ke halaman utama
    } catch (error) {
      console.error("Request error:", error);
      setErrorMessage("Terjadi kesalahan saat mencoba registrasi.");
    } finally {
      setIsLoading(false); // Reset loading state setelah semua selesai
    }
  };

  return (
    <div>
      <Navbar />
      <section id="login" className="login flex flex-col justify-center pt-24 relative items-center h-auto">
        <div className="w-full md:w-3/4 xl:w-1/2 px-8">
          <div className="w-full p-8 flex flex-col justify-center items-center gap-8">
            <p className="text-5xl text-neutral-800 font-black">Create an account</p>
            <form method="post" className="mt-2 flex flex-col gap-8 w-3/4" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-neutral-800" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-transparent border-2 py-3 px-5 rounded-lg text-sm border-based-1 outline-offset-0 text-neutral-800 focus:outline-primary focus:outline-2 focus:outline-offset-2 transition-all duration-200"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                  />
                </div>
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
                <div className="flex flex-col gap-4">
                  <label className="text-base font-bold text-neutral-800" htmlFor="birthdate">
                    Date of birth
                  </label>
                  <input
                    type="date"
                    required
                    name="birthdate"
                    autoComplete="off"
                    id="birthdate"
                    className="bg-transparent border-2 py-3 px-5 rounded-lg text-xs border-based-1 outline-offset-0 text-neutral-500 focus:outline-primary focus:outline-2 focus:outline-offset-2 transition-all duration-200 appearance-none web"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-base font-bold text-neutral-800" htmlFor="degree">
                    Gender
                  </label>
                  <select
                    name="degree"
                    required
                    id="degree"
                    autoComplete="off"
                    className="bg-transparent border-2 py-3  px-5 rounded-lg text-sm border-based-1 outline-offset-0 text-neutral-800 focus:outline-primary focus:outline-2 focus:outline-offset-2 transition-all duration-200 focus:bg-category-5 focus:border-based-1 appearance-none"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option selected value="male">
                      Male
                    </option>
                    <option value="female">Female</option>
                  </select>
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
                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-neutral-800" htmlFor="passwordConfrim">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      name="passwordConfrim"
                      id="passwordConfrim"
                      className="w-full bg-transparent border-2 py-3 px-5 rounded-lg text-sm border-based-1 outline-offset-0 text-neutral-800 focus:outline-primary focus:outline-2 focus:outline-offset-2 transition-all duration-200"
                      placeholder="Masukkan Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                {errorMessage && <p className="text-wrongSelected underline-offset-2 underline text-xs text-center font-bold">{errorMessage}</p>}
              </div>
              <Button type={"submit"} title={isLoading ? <img src={Loader} className="h-full mx-auto" /> : <p>Register</p>}></Button>
            </form>
            <div className="flex flex-col gap-4 items-center">
              <p className="text-neutral-800 text-center text-base">or</p>
              <div className="flex gap-4">
                <img src={facebook} className="w-14 h-14 cursor-pointer" alt="" />
                <img src={google} className="w-14 h-14 cursor-pointer" alt="" />
                <img src={apple} className="w-14 h-14 cursor-pointer" alt="" />
              </div>
              <p className="text-neutral-800 text-center text-base">
                Registered on Sonata?{" "}
                <span>
                  <Link className="text-primary" to={"/login"}>
                    Log In
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
