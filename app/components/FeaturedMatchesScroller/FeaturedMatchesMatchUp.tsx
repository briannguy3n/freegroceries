import FeaturedMatchesTeam from "./FeaturedMatchesTeam"
import { useMatchContext } from "@/app/MatchContext"

const FeaturedMatchesMatchUp = () => {
  const { firstMatch } = useMatchContext()

  return (
    <div className="flex flex-row items-center justify-center w-full gap-10 mb-2">
      <FeaturedMatchesTeam teamname={firstMatch.home_team} />
      <p className="text-white bottom-4 relative">@</p>
      <FeaturedMatchesTeam teamname={firstMatch.away_team} />
    </div>
  )
}

export default FeaturedMatchesMatchUp
