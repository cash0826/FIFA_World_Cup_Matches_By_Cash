import { useState } from "react"

function MatchCard({ match })  {

  return(
    <>
      <div className="match-card">
        <h3>{match.homeTeam} vs {match.awayTeam}</h3>
      </div>
    </>
  )
}

export default MatchCard;


// useParams is not needed, since it would expect new URLs, new routes
// Here we are just generating cards under the MatchesList, under the HomePage
// MatchCard is a presentational component used inside MatchList, not a route
// match is passed through MatchesList as a prop

