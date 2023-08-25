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
    <div className="bg-freegroceries-900 rounded-lg shadow flex flex-col justify-center items-center w-[500px] ">
      
      <div className="DateTime flex flex-col items-center justify-center">
        <p className="text-white mt-10">{formattedDateTime}</p>
      </div>

      <FeaturedMatchesMatchUp />

      <hr className="border border-freegroceries-200 w-full mt-4" />

      <FeaturedMatchesOddsSection />
    </div>
  )
}

export default FeaturedMatchesCard
