import React from "react"

// @ts-ignore
const FeaturedGameTeamOdds = ({ teamPlace, teamOdds }) => {
  return (
    <div className="w-full h-20 hover:bg-freegroceries-200 items-center justify-center flex">
      <a href=""><span className="font-light text-white pr-2">{teamPlace}</span></a>
      <a href=""><span className="text-gold-200 ">{teamOdds}</span></a>

    </div>
  )
}

export default FeaturedGameTeamOdds
