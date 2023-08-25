import React from "react"
import FeaturedGameCard from "./FeaturedGameCard"

const FeaturedGameScroller = () => {
  return (
    <div className="flex flex-row gap-6 w-full items-center justify-center">
      <FeaturedGameCard />

      {/* <FeaturedGameCard />
      <FeaturedGameCard /> */}

    </div>
  )
}

export default FeaturedGameScroller
