import React from "react"
import BaseballTeam from "./BaseballTeam"
import BaseballMoneyline from "./BaseballMoneyline"
import BaseballMatchup from "./BaseballMatchup"

const BaseballBettingCard = () => {
  return (
    <div className="
      bg-freegroceries-900
      drop-shadow
      grid
      grid-cols-2
      border-b-[1px]
      border-freegroceries-50
      h-24
      justify-center
      items-center">
      <BaseballMatchup />
      <BaseballMoneyline />
    </div>
  )
}

export default BaseballBettingCard
