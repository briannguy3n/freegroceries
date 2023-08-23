import React from "react"
import FeaturedMatchesCardTeam from "./FeaturedMatchesCardTeam"

const FeaturedMatchesCard = () => {
  return (
    <div
      className="
        max-w-sm 
        p-6
        bg-freegroceries-900
        rounded-lg
        shadow
        flex
        flex-col
        justify-center
        items-center
        gap-10
      "
    >
      <p className="text-white">Wed 16:05</p>
      <div
        className="
        flex
        flex-row
        gap-4
        items-center
        justify-center
        w-full
      "
      >
        <FeaturedMatchesCardTeam />
        <p className="text-white">@</p>
        <FeaturedMatchesCardTeam />
      </div>
      <div className="flex flex-row gap-10 justify-center">
        <p className="text-white">Home Team Odds</p>
        <p className="text-white">Away Team Odds</p>
      </div>
    </div>
  )
}

export default FeaturedMatchesCard
