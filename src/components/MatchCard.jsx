
function MatchCard( { match } )  {

  // Format startTimestamp (UNIX) to display Local  Time
  function formatTimeStamp(timeStamp) {
    return new Date(timeStamp * 1000)
      .toLocaleTimeString();
  }

  return(
    <>
      <div className="match-card">
        <h3> Round {match.round} | {match.group} </h3>
        <h4>{match.homeTeam} vs {match.awayTeam} at {formatTimeStamp(match.startTimestamp)} </h4>
      </div>
    </>
  )
}

export default MatchCard;


// useParams is not needed, since it would expect new URLs, new routes
// Here we are just generating cards under the MatchesList, under the HomePage
// MatchCard is a presentational component used inside MatchList, not a route
// match is passed through MatchesList as a prop

