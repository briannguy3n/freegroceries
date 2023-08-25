import React from "react"

// @ts-ignore
const FeaturedGameTeamOdds = ({ teamPlace, teamOdds }) => {
  return (
    <div className="w-full h-20 hover:bg-freegroceries-200 items-center justify-center flex">
      <span className="font-light text-white pr-2">{teamPlace}</span>
      <span className="text-gold-200 ">{teamOdds}</span>

    </div>
  )
}

export default FeaturedGameTeamOdds
