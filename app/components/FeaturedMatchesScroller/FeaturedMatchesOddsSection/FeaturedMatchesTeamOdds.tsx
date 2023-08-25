import React from 'react'

const FeaturedMatchesTeamOdds = (props) => {
  return (
    <div className="w-full h-14 hover:bg-freegroceries-200 items-center justify-center flex">
      <span className="text-white pr-2">{props.teamPlace}</span>
      <span className="font-light">{props.teamOdds}</span>

    {/* 
        <div className="hover:bg-freegroceries-200">
            <span className="text-white pr-2">2</span>
            <span className="font-light">awayTeamOdds</span>
        </div>  
    */}     

    </div>
  )
}

export default FeaturedMatchesTeamOdds
