"use client"

import React, { useState, useEffect } from "react"

const FeaturedMatchesCardTeam = () => {
  const [matchData, setMatchData] = useState(null)

  useEffect(() => {
    const apiKey = "YOUR_API_KEY"
    const apiUrl = "https://api.example.com/data"

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setMatchData(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  if (!matchData) {
    return <div>Loading...</div>
  }
  
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <p>Team Logo Image</p>
      <p>Team Name</p>
    </div>
  )
}

export default FeaturedMatchesCardTeam
