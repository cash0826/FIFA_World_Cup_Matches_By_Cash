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
      <div className="match-homeTeam">
        <img
          className="flag"
          src={homeTeamFlag}
          title={match.homeTeam}
          alt={match.homeTeam}
        />
        <h4>{match.homeTeam}</h4> 
      </div>

      <div className="match-details">
        <h4>{formatTimeStamp(match.startTimestamp)}</h4>
        <br/>
        <p>{match.group}</p>
        <p>Round {match.round}</p>
      </div>

      <div className="match-awayTeam">
        <img
          className="flag"
          src={awayTeamFlag}
          title={match.awayTeam}
          alt={match.awayTeam}
        />
        <h4>{match.awayTeam}</h4> 
      </div>
      
      
    </div>
  )
}

export default MatchCard;


// useParams is not needed, since it would expect new URLs, new routes
// Here we are just generating cards under the MatchesList, under the HomePage
// MatchCard is a presentational component used inside MatchList, not a route
// match is passed through MatchesList as a prop

