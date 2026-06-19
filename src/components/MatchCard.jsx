import '../styles/MatchCard.css'
import { formatTimeStamp } from "../utils/formatTimeStamp"
import { teams } from "../utils/teams"
import emblem from '../assets/WC2026_emblem.svg.webp'

function MatchCard( { match } )  {
  // Get team data from teams object to access flag filename
  const homeTeam = teams.find(team => team.name === match.homeTeam)
  const homeTeamFlag = homeTeam ? new URL(`../assets/flags/${homeTeam.flag}`, import.meta.url).href : ''

  const awayTeam = teams.find(team => team.name === match.awayTeam)
  const awayTeamFlag = awayTeam ? new URL(`../assets/flags/${awayTeam.flag}`, import.meta.url).href : ''

  return(
    <div className="match-card-main">
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
          <p>Group {match.group}</p>
          {match.status !== "Not started" && (
            <p id="status"> {match.status} </p>
          )}
          {match.inProgress === "inprogress" && (
            <p>🟢</p>
          )}          
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
      {match.status !== "Not started" && (
        <div className="match-card-div">
          <div className="match-score">
            <h4 className="country-short-code">{match.homeTeamCode}</h4>
            <h3 className="score">{match.homeScore}</h3>
            <img
              className="emblem"
              src={emblem}
              title="2026 FIFA World Cup Emblem"
              alt="2026 FIFA World Cup Emblem"
            />
            <h3 className="score">{match.awayScore}</h3>
            <h4 className="country-short-code">{match.awayTeamCode}</h4>
          </div>
        </div>
      )}
    </div>
  )
}

export default MatchCard;


// useParams is not needed, since it would expect new URLs, new routes
// Here we are just generating cards under the MatchesList, under the HomePage
// MatchCard is a presentational component used inside MatchList, not a route
// match is passed through MatchesList as a prop

