import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { getMatches } from "../services/GetMatches"

function MatchesList() {
  const [matches, setMatches] = useState([]);

  let today = new Date().toISOString().split("T")[0]
  let kickoff = `2026-06-11`

  useEffect( () => {
    getMatches(kickoff).then( (data) => {
      setMatches(data)
    }).catch( (error) => {
      console.log("Error fetching matches: ", error)
    });
  }, []);

  if (matches.length === 0){
    return <p>Loading Events...</p>
  }
  const cards = matches.map(match => (
    <li key={match.id} className="match-card">
      {match.homeTeam} vs {match.awayTeam}
    </li>
  ))


  return(
    <ul>
      {cards}
    </ul>
  )
}

export default MatchesList;