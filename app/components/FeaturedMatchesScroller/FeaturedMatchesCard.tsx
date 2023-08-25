import React from "react"
import FeaturedMatchesCardTeam from "./FeaturedMatchesCardTeam"
import sportsdata from "../../sportsdata"

const FeaturedMatchesCard = () => {
  const firstMatch = sportsdata.gamedata[0]

  if (!firstMatch) {
    return null
  }

  //   --------------------------------

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

  const changeDateTime = () => {}

  //   --------------------------------

  return (
    <div
      className="
        bg-freegroceries-900
        rounded-lg
        shadow
        flex
        flex-col
        justify-center
        items-center
        gap-4
        w-96
      "
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-white mt-4">{firstMatch.commence_time}</p>
        <p className="text-white">Wed 16:05</p>
      </div>

      <div
        className="
        flex
        flex-row
        items-center
        justify-center
        w-full
        mt-4
      "
      >
        <FeaturedMatchesCardTeam
          teamname={firstMatch.home_team}
          odds={
            <>
              <span className="text-white pr-2">1</span>
              <span className="font-light">{homeTeamAmericanOdds}</span>
            </>
          }
        />

        <p className="text-white bottom-14 relative">@</p>

        <FeaturedMatchesCardTeam
          teamname={firstMatch.away_team}
          odds={
            <>
              <span className="text-white pr-2">2</span>
              <span className="font-light">{awayTeamAmericanOdds}</span>
            </>
          }
        />
      </div>
    </div>
  )
}

export default FeaturedMatchesCard
