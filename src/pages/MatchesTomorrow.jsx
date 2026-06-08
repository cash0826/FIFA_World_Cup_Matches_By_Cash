import { useState, useEffect } from "react"
import { getMatches } from "../services/GetMatchesJSON"
import NavBar from "../components/NavBar"
import MatchGrid from "../components/MatchGrid"

function MatchesTomorrow() {
  // State Management of API Fetch
  const [matchesTomorrow, setMatchesTomorrow] = useState([])

  useEffect( () => {
    // Function to Return Tomorrow's Date
    function tomorrow () {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowFormatted = tmrw.toISOString().split("T")[0];
      return tomorrowFormatted
    }
    // using getMatches from JSON file for now (add tomorrowFormatted parameter when complete)
    getMatches()
      .then( (data) => setMatchesTomorrow(data))
      .catch( (error) => console.log("Error fetching matches for tomorrow: ", error))
  }, [])

  // Function to check if World Cup has started
  // Heading will return "Matches for Tomorrow" if the event starts tomorrow
  function getHeading(){
    const today = new Date()
    const oneDayToKickoff = new Date(`2026-06-10T00:00:00`)
    return oneDayToKickoff > today ? "Kickoff Matches starting Jun 11:" : "Matches for Tomorrow"
  }

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