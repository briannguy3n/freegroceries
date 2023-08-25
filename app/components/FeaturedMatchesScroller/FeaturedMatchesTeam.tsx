"use client"

import React, { useState, useEffect } from "react"

const FeaturedMatchesTeam = (props) => {
 

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
      w-full
      "
    >

      <div className="TeamLogoAndName flex flex-col items-center">
        <img
          className="h-16 pb-4"
          src={teamLogoUrl}
          alt={`${props.teamname} Logo`}
        />
        <p className="">{props.teamname}</p>
      </div>

      {/* <hr className="border border-gray-600 w-full" /> */}
      
     

    </div>
  )
}

export default FeaturedMatchesTeam
