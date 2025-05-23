import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Plans from "./pages/Plans";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Demo from "./pages/Demo";
import PlayerContextProvider from "./context/PlayerContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <Routes>
          <Route path="/" element={<Plans />} />
          <Route path="/home" element={<App />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/playlist/:id" element={<App />} />
          <Route path="/search" element={<App />} />
        </Routes>
      </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>
);
