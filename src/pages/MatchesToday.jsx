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

  return(
    <div className="matches-today-div">
      <MatchGrid matches={sortedMatches}/>
    </div>
  )
}

export default MatchesToday;