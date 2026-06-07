import { Link, useOutletContext } from "react-router-dom"
import MatchCard from "../components/MatchCard"
import MatchGrid from "../components/MatchGrid"

function MatchesToday() {
  const { matches, setMatches} = useOutletContext();

  if (matches.length === 0){
    return <p>Loading Events...</p>
  }

  return(
    <>
    <div>
      <MatchGrid matches={matches}/>
    </div>
    <footer>
      <div><Link to="/MatchesTomorrow">View Matches for Tomorrow</Link></div>
      <div><Link to="/Search">Search Matches by Date</Link></div>
    </footer>
    </>
  )
}

export default MatchesToday;