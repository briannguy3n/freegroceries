"use client"

// @ts-ignore
import BaseballBettingPage from "./components/BaseballBettingPage/BaseballBettingPage"
import Register from "./components/Register"
import Login from "./components/Login"
import FeaturedGameScroller from "./components/FeaturedGameScroller/FeaturedGameScroller"
import { MatchProvider } from "./util/MatchContext"
import React from "react"
import Navbar from "./components/Navbar/Navbar"


export default function Home() {
  return (
    <div className="bg-freegroceries-100 h-screen w-screen">
      <Navbar />
      <BaseballBettingPage />
      
    </div>
  )
}



// <div className="h-full w-screen bg-freegroceries-100 justify-center items-center">
//         <Navbar />

//         <div className="">
//           <BaseballBettingPage />

//           {/* <MatchProvider>
//         <FeaturedGameScroller />
//       </MatchProvider> */}

//           {/* <Register /> */}
//           {/* <Login /> */}
//         </div>
//       </div>