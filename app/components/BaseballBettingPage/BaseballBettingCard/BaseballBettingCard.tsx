import React from "react"
import BaseballTeam from "./BaseballTeam"
import BaseballMoneyline from "./BaseballMoneyline"

const BaseballBettingCard = () => {
  return (
    <div className="bg-freegroceries-900 drop-shadow grid grid-cols-2 pt-4">
      <div className="grid-rows-2 grid">
        <BaseballTeam teamName="🦆HOU Astros" />
        <BaseballTeam teamName="🦆DET Tigers" />
      </div>
      <BaseballMoneyline />
    </div>
  )
}

export default BaseballBettingCard
