import BaseballTeam from "./BaseballTeam"

const BaseballMatchup = () => {
  return (
    <div className="grid-rows-2 grid relative left-20 h-full">
      <BaseballTeam teamName="🦆HOU Astros" />
      <BaseballTeam teamName="🦆DET Tigers" />
    </div>
  )
}

export default BaseballMatchup

