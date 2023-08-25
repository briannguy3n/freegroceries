import FeaturedGameTeam from "./FeaturedGameTeam"
import { useMatchContext } from "@/app/MatchContext"


const FeaturedGameMatchup = ({  }) => {
  const { firstMatch, teamLibrary } = useMatchContext()


  // #region Abbreviating Team Names 
  const { abbreviation: homeTeamAbbreviation, mascot: homeMascot, imageLogo: homeImageLogo } = teamLibrary[firstMatch.home_team];
  const { abbreviation: awayTeamAbbreviation, mascot: awayMascot, imageLogo: awayImageLogo } = teamLibrary[firstMatch.away_team];

  const finalHomeTeamName = `${homeTeamAbbreviation} ${homeMascot}`;
  const finalAwayTeamName = `${awayTeamAbbreviation} ${awayMascot}`;

  // #endregion


return (
  <div className="flex flex-row items-center justify-center w-full gap-2 mb-2">
    <FeaturedGameTeam teamName={finalHomeTeamName} logo={homeImageLogo}/>
    <p className="text-white bottom-4 relative">@</p>
    <FeaturedGameTeam teamName={finalAwayTeamName} logo={awayImageLogo} />
  </div>
);
};

export default FeaturedGameMatchup;

/*

Ok think this through. I need to get the URL from teamLibrary over to the team 
*/