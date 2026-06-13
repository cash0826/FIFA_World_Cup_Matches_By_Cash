import { useOutletContext } from "react-router-dom"
import MatchGrid from "../components/MatchGrid"

function MatchesToday() {
  const { matches} = useOutletContext();

  // Requires further development
  // If event has not started, display events on kickoff date

  const today = new Date()
  const kickoff = new Date(`2026-06-11T00:00:00`)

  if (kickoff > today) {
    return <p>Stay Tuned!</p>
  }

  if (matches.length === 0){
    return <p>Loading Events...</p>
  }

  return(
    <div className="matches-today-div">
      <MatchGrid matches={matches}/>
    </div>
  )
}

export default MatchesToday;