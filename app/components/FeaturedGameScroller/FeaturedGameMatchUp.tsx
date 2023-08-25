import FeaturedGameTeam from "./FeaturedGameTeam"
import { useMatchContext } from "@/app/MatchContext"


const FeaturedGameMatchUp = ({  }) => {
  const { firstMatch, teamLibrary } = useMatchContext()


  // #region Abbreviating Team Names 
  const { abbreviation: homeTeamAbbreviation, mascot: homeMascot } = teamLibrary[firstMatch.home_team];
  const { abbreviation: awayTeamAbbreviation, mascot: awayMascot } = teamLibrary[firstMatch.away_team];

  const finalHomeTeamName = `${homeTeamAbbreviation} ${homeMascot}`;
  const finalAwayTeamName = `${awayTeamAbbreviation} ${awayMascot}`;

  // #endregion


return (
  <div className="flex flex-row items-center justify-center w-full gap-10 mb-2">
    <FeaturedGameTeam teamname={finalHomeTeamName} />
    <p className="text-white bottom-4 relative">@</p>
    <FeaturedGameTeam teamname={finalAwayTeamName} />
  </div>
);
};

export default FeaturedGameMatchUp;