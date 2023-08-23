import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar/Navbar";
import FeaturedMatchesScroller from "./components/FeaturedMatchesScroller/FeaturedMatchesScroller";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-freegroceries-200 justify-center items-center">
      {/* <div className="bg-green-700"></div> */}
      <Navbar />
      <div className="flex w-screen h-screen justify-center items-center">
        <FeaturedMatchesScroller />
        {/* <Register /> */}
        {/* <Login /> */}
      </div>
    </div>
  );
}
