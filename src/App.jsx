import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PlaybackBar from "./components/PlaybackBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-screen h-dvh flex">
      <Sidebar />
      <div className="flex flex-col grow w-full">
        <Header />
        <Home />
        <PlaybackBar />
      </div>
    </div>
  );
};

export default App;
