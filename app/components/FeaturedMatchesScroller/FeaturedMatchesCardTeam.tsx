"use client"

import React, { useState, useEffect } from "react"

const FeaturedMatchesCardTeam = () => {
    const [sportsData, setSportsData] = useState(null);

  //   The fetched data is stored in the sportsData state variable, which is an object.
  //   This object contains all the properties returned by the API. You can directly access each property within the JSX using sportsData.propertyName.

  useEffect(() => {
    const apiUrl = 'https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&markets=h2h&apiKey=588adf6c8e5ebb8d688bbc14e55f70a4';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the fetched data
        setSportsData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  //   if (!sportsData) {
  //     return <div>Loading...</div>
  //   }

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <p>Team Logo Image</p>
      <p>Team Name</p>
    </div>
  )
}

export default FeaturedMatchesCardTeam
