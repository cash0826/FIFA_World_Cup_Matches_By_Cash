import { Link, useOutletContext } from "react-router-dom"
import MatchCard from "../components/MatchCard"

function MatchesList() {
  const { matches, setMatches} = useOutletContext();

  if (matches.length === 0){
    return <p>Loading Events...</p>
  }

  // Creates MatchCard and passes match as prop
  const cards = matches.map(match => (
    <MatchCard 
      key={match.id}
      match={match}
    />
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