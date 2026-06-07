import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getMatches } from "../services/GetMatchesJSON"

function MatchesList() {
  const [matches, setMatches] = useState([]);

  useEffect( () => {

    // use getMatchesJSON for now (no date needed)
    getMatches().then( (data) => {
      setMatches(data)
    }).catch( (error) => {
      console.log("Error fetching matches: ", error)
    });
  }, []);

  if (matches.length === 0){
    return <p>Loading Events...</p>
  }
  const cards = matches.map(match => (
    <div key={match.id} className="match-card">
      <h3>{match.homeTeam} vs {match.awayTeam}</h3>
    </div>
  ))

  return(
    <>
    <div>
      {cards}
    </div>
    <footer>
      <div><Link to="/MatchesTomorrow">View Matches for Tomorrow</Link></div>
      <div><Link to="/Search">Search Matches by Date</Link></div>
    </footer>
    </>
  )
}

export default MatchesList;