import React from "react"
import FeaturedMatchesCard from "./FeaturedMatchesCard"

const FeaturedMatchesScroller = () => {
  return (
    <div className="flex flex-row gap-6 w-full items-center justify-center">
      <FeaturedMatchesCard />
      <FeaturedMatchesCard />
      <FeaturedMatchesCard />
    </div>
  )
}

export default FeaturedMatchesScroller
