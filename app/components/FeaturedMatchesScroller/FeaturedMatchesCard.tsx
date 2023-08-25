import React from "react";
import FeaturedMatchesMatchUp from "./FeaturedMatchesMatchUp"
import FeaturedMatchesOddsSection from "./FeaturedMatchesOddsSection/FeaturedMatchesOddsSection"
import { useMatchContext } from "@/app/MatchContext";

const FeaturedMatchesCard = () => {
  const { firstMatch } = useMatchContext();

// #region changeDateTime

const changeDateTime = (dateTime) => {
  const options = { weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false };
  const date = new Date(dateTime);

  return date.toLocaleString('en-US', options);
};

const formattedDateTime = changeDateTime(firstMatch.commence_time);

  // #endregion



  return (
    <div className="bg-freegroceries-900 rounded-lg shadow flex flex-col justify-center items-center gap-4 w-96">
      
      <div className="DateSection flex flex-col items-center justify-center">
        <p className="text-white mt-4">{formattedDateTime}</p>
      </div>

      <FeaturedMatchesMatchUp />
      <FeaturedMatchesOddsSection />
    </div>
  )
}

export default FeaturedMatchesCard
