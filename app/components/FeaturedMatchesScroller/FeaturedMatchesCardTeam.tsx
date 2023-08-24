"use client"

import React, { useState, useEffect } from "react"

const FeaturedMatchesCardTeam = () => {
  const [sportsData, setSportsData] = useState<any>(null)

  //   The fetched data is stored in the sportsData state variable, which is an object.
  //   This object contains all the properties returned by the API. You can directly access each property within the JSX using sportsData.propertyName.

  React.useEffect(function () {
    fetch(
      "https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&markets=h2h&apiKey=588adf6c8e5ebb8d688bbc14e55f70a4"
    )
      .then((res) => res.json())
      .then((data) => setSportsData(data))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center text-white">
      {sportsData &&
        sportsData.data &&
        sportsData.data.length > 0 &&
        sportsData.data.map(match => (
          <div key={match.id}>
            <p>Team Logo Image</p>
            <p>{match.home_team}</p> {/* Replace with the home_team value */}
          </div>
        ))}
    </div>
  );
};

export default FeaturedMatchesCardTeam;