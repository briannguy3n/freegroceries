// @ts-ignore
import FeaturedGameMatchup from "./FeaturedGameMatchup"
import React from "react";
import FeaturedGameOddsSection from "./FeaturedGameOddsSection/FeaturedGameOddsSection"
import { useMatchContext } from "@/app/util/MatchContext";

const FeaturedGameCard = () => {
  const { firstMatch } = useMatchContext();

// #region changeDateTime

// @ts-ignore
const changeDateTime = (dateTime) => {
  const options = { weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false };
  const date = new Date(dateTime);

  // @ts-ignore
  return date.toLocaleString('en-US', options);
};

const formattedDateTime = changeDateTime(firstMatch.commence_time);

  // #endregion



  return (
    <div className="bg-freegroceries-900 rounded-lg shadow flex flex-col justify-center items-center w-[500px] ">
      
      <div className="DateTime flex flex-col items-center justify-center">
        <p className="text-white mt-10">{formattedDateTime}</p>
      </div>

      <FeaturedGameMatchup />

      <hr className="border border-freegroceries-200 w-full mt-4" />

      <FeaturedGameOddsSection />
    </div>
  )
}

export default FeaturedGameCard
