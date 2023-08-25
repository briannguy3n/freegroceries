import FeaturedGameTeamOdds from "./FeaturedGameTeamOdds"
import { useMatchContext } from "@/app/MatchContext"

const FeaturedGameOddsSection = () => {
  const { firstMatch } = useMatchContext()

  // #region Calculating Betting Odds 

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

  // #endregion


  return (
    <div className="flex flex-row w-full items-center justify-center">
      <FeaturedGameTeamOdds teamPlace="1" teamOdds={homeTeamAmericanOdds} />
      <FeaturedGameTeamOdds teamPlace="2" teamOdds={awayTeamAmericanOdds} />

    </div>
  )
}

export default FeaturedGameOddsSection
