import React from "react";
import Tabs from "./Components/Tabs";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

const Layout = () => {
  return (
    <div>
      <div className=" w-full h-full">
        <Header />
        <Tabs />
      </div>
      <div className="bg-amber-300 w-full h-60">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
