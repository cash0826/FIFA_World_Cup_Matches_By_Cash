import { useOutletContext } from "react-router-dom"
import MatchGrid from "../components/MatchGrid"
import { filterToLocaleDate } from "../utils/filterToLocaleDate"

function MatchesToday() {
  const { matches} = useOutletContext();
  const today = new Date()

  // Sort Matches in order of occurrence. 
  // Uses imported function to filter API results and return only matches in local date
  // sortedMatches will be the variable used in jsx return()
  const sortedMatches = filterToLocaleDate(matches, today)
    .sort((a, b) => a.startTimestamp - b.startTimestamp)

  // Heading based on date and kickoff
  const kickoff = new Date(`2026-06-11T00:00:00`)

  if (kickoff > today) {
    return <p>Kickoff starts June 11th 2026</p>
  }

  if (sortedMatches.length === 0){
    return <p>Loading Events...</p>
  }

  return(
    <div className="matches-today-div">
      <MatchGrid matches={sortedMatches}/>
    </div>
  )
}

export default MatchesToday;