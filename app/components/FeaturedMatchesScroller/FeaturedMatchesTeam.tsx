"use client"

import React, { useState, useEffect } from "react"

const FeaturedMatchesTeam = ({teamname}) => {
  //   --------------------------------

  // Inserting Images based on Team Names

  const teamImageMapping = {
    "Pittsburgh Pirates":
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Pittsburgh_Pirates_logo_2014.svg/1200px-Pittsburgh_Pirates_logo_2014.svg.png",

    "St. Louis Cardinals":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLkmonMjcaIOCQbS9MSsCJShnTfIu51HUNqa_75o&s",

    // Add more team names and URLs here
  }

  const teamLogoUrl = teamImageMapping[teamname]

  //   --------------------------------

  return (
    <div className="TeamLogoAndName flex flex-col items-center">
      <img
        className="h-16 pb-4"
        src={teamLogoUrl}
        alt={`${teamname} Logo`}
      />
      <p className="text-white font-semibold">{teamname}</p>
    </div>
  )
}

export default FeaturedMatchesTeam
