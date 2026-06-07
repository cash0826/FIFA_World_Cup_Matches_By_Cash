import { useState, useEffect } from "react"
import { getMatches } from "../services/GetMatchesJSON"
import NavBar from "../components/NavBar"
import MatchGrid from "../components/MatchGrid"

function MatchesTomorrow() {
  // Tomorrow's Date
  let tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1);
  let tomorrowFormatted = tomorrow.toISOString().split("T")[0];

  // State Management of API Fetch
  const [matchesTomorrow, setMatchesTomorrow] = useState([])

  useEffect( () => {
    // using getMatches from JSON file for now (add tomorrowFormatted parameter when complete)
    getMatches()
      .then( (data) => setMatchesTomorrow(data))
      .catch( (error) => console.log("Error fetching matches for tomorrow: ", error))
  }, [])

// Passes matchesTomorrow as Outlet context to child components
  return(
    <>
    <NavBar/>
    <main>
      <h2>Matches for tomorrow:</h2>
      <div>
        <MatchGrid matches={matchesTomorrow}/>
      </div>
    </main>
    </>
  )
}

export default MatchesTomorrow;