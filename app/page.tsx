"use client"

// @ts-ignore
import BaseballBettingPage from "./components/BaseballBettingPage/BaseballBettingPage"
import Register from "./components/Register"
import Login from "./components/Login"
import FeaturedGameScroller from "./components/FeaturedGameScroller/FeaturedGameScroller"
import { MatchProvider } from "./util/MatchContext"
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import SectionHeader from "./components/SectionHeader"


export default function Home() {
  return (
    <div className="h-screen flex justify-center">
      <div className=" flex flex-col justify-center w-[800px]">
        <Navbar />
        <SectionHeader />
        <BaseballBettingPage />
      
      </div>
    </div>
  )
}
