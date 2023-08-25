import React from "react";
import FeaturedMatchesMatchUp from "./FeaturedMatchesMatchUp"
import FeaturedMatchesOddsSection from "./FeaturedMatchesOddsSection/FeaturedMatchesOddsSection"
import { useMatchContext } from "@/app/MatchContext";

const FeaturedMatchesCard = () => {
  const { firstMatch } = useMatchContext();

  //   --------------------------------

  const changeDateTime = () => {}

  return (
    <div className="bg-freegroceries-900 rounded-lg shadow flex flex-col justify-center items-center gap-4 w-96">
      
      <div className="DateSection flex flex-col items-center justify-center">
        <p className="text-white mt-4">{firstMatch.commence_time}</p>
        <p className="text-white">Wed 16:05</p>
      </div>

      <FeaturedMatchesMatchUp />
      <FeaturedMatchesOddsSection />
    </div>
  )
}

export default FeaturedMatchesCard
