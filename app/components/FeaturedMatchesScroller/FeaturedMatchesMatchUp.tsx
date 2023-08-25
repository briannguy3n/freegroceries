import FeaturedMatchesTeam from "./FeaturedMatchesTeam"
import { useMatchContext } from "@/app/MatchContext"
import { abbreviateTeamName, teamLibrary } from "../../utils/abbreviateTeamName"


const FeaturedMatchesMatchUp = ({  }) => {
  const { firstMatch } = useMatchContext()

  // #region Abbreviating Team Names 
  const { abbreviation: homeTeamAbbreviation, mascot: homeMascot } = teamLibrary[firstMatch.home_team];
  const { abbreviation: awayTeamAbbreviation, mascot: awayMascot } = teamLibrary[firstMatch.away_team];

  const finalHomeTeamName = `${homeTeamAbbreviation} ${homeMascot}`;
  const finalAwayTeamName = `${awayTeamAbbreviation} ${awayMascot}`;

  // #endregion


return (
  <div className="flex flex-row items-center justify-center w-full gap-10 mb-2">
    <FeaturedMatchesTeam teamname={finalHomeTeamName} />
    <p className="text-white bottom-4 relative">@</p>
    <FeaturedMatchesTeam teamname={finalAwayTeamName} />
  </div>
);
};

export default FeaturedMatchesMatchUp;