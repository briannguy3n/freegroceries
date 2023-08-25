import sportsdata from "@/app/sportsdata"
import FeaturedMatchesTeam from "./FeaturedMatchesTeam"

const FeaturedMatchesMatchUp = () => {
  const firstMatch = sportsdata.gamedata[0]

  if (!firstMatch) {
    return null
  }
  // Calculating Betting Odds

  const homeTeamDecimalOdds =
    firstMatch.bookmakers[0].markets[0].outcomes[0].price
  const awayTeamDecimalOdds =
    firstMatch.bookmakers[0].markets[0].outcomes[1].price

  const calculateAmericanOdds = (decimalOdds: number) => {
    if (decimalOdds >= 2.0) {
      const americanOdds = Math.round((decimalOdds - 1) * 100)
      return americanOdds >= 0 ? `+${americanOdds}` : americanOdds
    } else if (decimalOdds > 1.0 && decimalOdds < 2.0) {
      const americanOdds = Math.round(-100 / (decimalOdds - 1))
      return americanOdds >= 0 ? `+${americanOdds}` : americanOdds
    }
    return "+0" // Handle any other cases
  }

  const homeTeamAmericanOdds = calculateAmericanOdds(homeTeamDecimalOdds)
  const awayTeamAmericanOdds = calculateAmericanOdds(awayTeamDecimalOdds)

  return (
    <div
      className="
        flex
        flex-row
        items-center
        justify-center
        w-full
        mt-4F
        gap-2
"
    >
      <FeaturedMatchesTeam teamname={firstMatch.home_team} />
      <p className="text-white bottom-4 relative">@</p>
      <FeaturedMatchesTeam teamname={firstMatch.away_team} />
    </div>
  )
}

export default FeaturedMatchesMatchUp
