import '../styles/MatchCard.css'
import { formatTimeStamp } from "../utils/formatTimeStamp"
import { teams } from "../utils/teams"

function MatchCard( { match } )  {
  
  // Format startTimestamp (UNIX) to display Local Time (separated to utils)

  // Get team data from teams array to access flag filename
  const homeTeam = teams.find(team => team.name === match.homeTeam)
  const homeTeamFlag = homeTeam ? new URL(`../assets/flags/${homeTeam.flag}`, import.meta.url).href : ''

  const awayTeam = teams.find(team => team.name === match.awayTeam)
  const awayTeamFlag = awayTeam ? new URL(`../assets/flags/${awayTeam.flag}`, import.meta.url).href : ''

  return(
    <div className="match-card-div">
      <h3 className="match-title">
        <img
          className="flag"
          src={homeTeamFlag}
          title={match.homeTeam}
          alt={match.homeTeam}
        />
        {match.homeTeam} 

        | {formatTimeStamp(match.startTimestamp)} 

        <img
          className="flag"
          src={awayTeamFlag}
          title={match.awayTeam}
          alt={match.awayTeam}
        />
        | {match.awayTeam} 
      </h3>
      
      <h4 className="match-details"> Round {match.round} | {match.group} </h4>
    </div>
  )
}

export default MatchCard;


// useParams is not needed, since it would expect new URLs, new routes
// Here we are just generating cards under the MatchesList, under the HomePage
// MatchCard is a presentational component used inside MatchList, not a route
// match is passed through MatchesList as a prop

