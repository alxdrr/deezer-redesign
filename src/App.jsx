import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
const App = () => {
  return (
    <div className="w-screen h-dvh flex">
      <Sidebar />
      <div className="flex flex-col grow">
        <Header />
      </div>
    </div>
  );
};

export default App;
