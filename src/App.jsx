import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="w-screen h-dvh flex">
      <Sidebar />
      <div className="flex flex-col grow w-full">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default App;
