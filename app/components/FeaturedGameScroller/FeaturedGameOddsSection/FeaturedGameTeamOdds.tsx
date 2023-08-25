import React from "react"

const FeaturedGameTeamOdds = ({ teamPlace, teamOdds }) => {
  return (
    <div className="w-full h-20 hover:bg-freegroceries-200 items-center justify-center flex">
      <span className="font-light text-white pr-2">{teamPlace}</span>
      <span className="text-gold-200 ">{teamOdds}</span>

      {/* 
        <div className="hover:bg-freegroceries-200">
            <span className="text-white pr-2">2</span>
            <span className="font-light">awayTeamOdds</span>
        </div>  
    */}
    </div>
  )
}

export default FeaturedGameTeamOdds
