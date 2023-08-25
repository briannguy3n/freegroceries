"use client"

import React, { useState, useEffect } from "react"

const FeaturedGameTeam = ({}) => {

  return (
    <div className="TeamLogoAndName flex flex-col items-center">
      <img
        className="h-16 pb-4"
        // src={teamLogoUrl}
        // alt={`${teamname} Logo`}
      />
      {/* <p className="text-white font-semibold">{teamname}</p> */}
    </div>
  )
}

export default FeaturedGameTeam
