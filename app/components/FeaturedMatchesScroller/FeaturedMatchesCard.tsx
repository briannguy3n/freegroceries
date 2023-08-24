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

  //   --------------------------------

  return (
    <div
      className="
      pt-6
      px-6
        bg-freegroceries-900
        rounded-lg
        shadow
        flex
        flex-col
        justify-center
        items-center
        gap-4
      "
    >
      <p className="text-white">Wed 16:05</p>

      <div
        className="
        flex
        flex-row
        items-center
        justify-center
        gap-8
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

        <p className="text-white relative bottom-4">@</p>

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

      <hr className="-mx-22 border border-gray-600 mt-4 w-full relative bottom-20" />
    

    </div>
  )
}

export default FeaturedMatchesCard
