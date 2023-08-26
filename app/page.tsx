"use client"

import Register from "./components/Register"
import Login from "./components/Login"
import FeaturedGameScroller from "./components/FeaturedGameScroller/FeaturedGameScroller"
import React from "react"
import { MatchProvider } from "./util/MatchContext"
import Navbar from "./components/Navbar/Navbar"

export default function Home() {
  return (
    <div className="h-full w-screen bg-freegroceries-100 justify-center items-center">
      <Navbar />

      <div className="flex w-screen h-screen justify-center items-center">
        <MatchProvider>
          <FeaturedGameScroller />
        </MatchProvider>

        {/* <Register /> */}
        {/* <Login /> */}
      </div>
    </div>
  )
}
