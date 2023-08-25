"use client"

import React, { useState, useEffect } from "react"

const FeaturedMatchesCardTeam = (props) => {
  //   const matches = sportsdata.gamedata.map((match) => {
  //     return (
  //       <div
  //         key={match.id}
  //         className="flex flex-col items-center justify-center text-white"
  //       >
  //         <p>Team Logo Image</p>
  //         <p>{match.home_team}</p>
  //         <p>{match.away_team}</p>
  //       </div>
  //     )
  //   })

  //   return <div>{matches}</div>
  // }

  // export default FeaturedMatchesCardTeam

  //   --------------------------------

  // Inserting Images based on Team Names

  const teamImageMapping = {
    "Pittsburgh Pirates":
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Pittsburgh_Pirates_logo_2014.svg/1200px-Pittsburgh_Pirates_logo_2014.svg.png",

    "St. Louis Cardinals":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLkmonMjcaIOCQbS9MSsCJShnTfIu51HUNqa_75o&s",

    // Add more team names and URLs here
  }

  const teamLogoUrl = teamImageMapping[props.teamname]

  //   --------------------------------

  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      text-white
      "
    >

      <img
        className="h-16 pb-4"
        src={teamLogoUrl}
        alt={`${props.teamname} Logo`}
      />
      <p className="pb-14">{props.teamname}</p>

      <div className="w-full h-full flex items-center justify-center hover:bg-freegroceries-200 ">
        <a
          href=""
          className="
        text-yellow-400
        
        
          "
        >
          {props.odds}
        </a>
      </div>

    </div>
  )
}

export default FeaturedMatchesCardTeam
