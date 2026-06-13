import '../styles/MatchCard.css'
import { formatTimeStamp } from "../utils/formatTimeStamp"

function MatchCard( { match } )  {
  
  // Format startTimestamp (UNIX) to display Local Time (separated to utils)

  return(
    <div className="match-card-div">
      <h3>{match.homeTeam} | {formatTimeStamp(match.startTimestamp)} | {match.awayTeam} </h3>
      <h4> Round {match.round} | {match.group} </h4>
    </div>
  )
}

export default MatchCard;


// useParams is not needed, since it would expect new URLs, new routes
// Here we are just generating cards under the MatchesList, under the HomePage
// MatchCard is a presentational component used inside MatchList, not a route
// match is passed through MatchesList as a prop

