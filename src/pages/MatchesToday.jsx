import { useOutletContext } from "react-router-dom"
import MatchGrid from "../components/MatchGrid"

function MatchesToday() {
  const { matches} = useOutletContext();
  const today = new Date()

  // -+1 days in API results. This function only returns matches for local date
  const matchesForToday = matches.filter(match => {
    const matchDate = new Date(match.startTimestamp * 1000)
    return(
      matchDate.toDateString() === today.toDateString()
    );
  });

  // Sort Matches in order of occurrence. Variable to be used in jsx return()
  const sortedMatches = matchesForToday.sort((a, b) => a.startTimestamp - b.startTimestamp)

  // Heading based on date and kickoff
  const kickoff = new Date(`2026-06-11T00:00:00`)

  if (kickoff > today) {
    return <p>Kickoff starts June 11th 2026</p>
  }

  if (matches.length === 0){
    return <p>Loading Events...</p>
  }

  return(
    <div className="matches-today-div">
      <MatchGrid matches={sortedMatches}/>
    </div>
  )
}

export default MatchesToday;