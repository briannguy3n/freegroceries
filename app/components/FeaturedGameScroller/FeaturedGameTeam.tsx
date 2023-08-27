"use client"



import React, { useState, useEffect } from "react"

// @ts-ignore
const FeaturedGameTeam = (props) => {

  return (
    <div className="TeamLogoAndName flex flex-col items-center w-full">
      <img
        className="h-16 pb-4"
        src={props.logo}
        alt={`${props.teamName} Logo`}
      />
      <p className="text-white font-semibold">{props.teamName}</p>
    </div>
  )
}

export default FeaturedGameTeam
