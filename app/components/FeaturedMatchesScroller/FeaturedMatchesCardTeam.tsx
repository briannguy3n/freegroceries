"use client"

import React, { useState, useEffect } from "react"

const FeaturedMatchesCardTeam = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // Fetch data from the API here
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <p>Team Logo Image</p>
      <p>Team Name</p>
      
    </div>
  )
}

export default FeaturedMatchesCardTeam
