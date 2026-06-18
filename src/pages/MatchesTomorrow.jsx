import { useState, useEffect } from "react"
import { getMatches } from "../services/GetMatches"
import { filterToLocaleDate } from "../utils/filterToLocaleDate"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import MatchGrid from "../components/MatchGrid"

// Moved to outside of the component (static)
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

function MatchesTomorrow() {
  // State Management of API Fetch
  const [matchesTomorrow, setMatchesTomorrow] = useState([])

  useEffect( () => {
    // Function to Return Tomorrow's Date
    function formatTomorrow () {
      const tomorrowFormatted = tomorrow.toISOString().split("T")[0];
      return tomorrowFormatted
    }
    // using getMatches from JSON file for now (add formatTomorrow() parameter)
    getMatches(formatTomorrow())
      .then( (data) => setMatchesTomorrow(data))
      .catch( (error) => console.log("Error fetching matches for tomorrow: ", error))
  }, [])

  // Sort Matches in order of occurrence. Variable to be used in jsx return()
  const sortedMatches = filterToLocaleDate(matchesTomorrow, tomorrow)
    .sort((a, b) => a.startTimestamp - b.startTimestamp)

  // Function to check if World Cup has started
  // Heading will return "Matches for Tomorrow" if the event starts tomorrow
  function getHeading(){
    const today = new Date()
    const oneDayToKickoff = new Date(`2026-06-10T00:00:00`)
    return oneDayToKickoff > today ? "Kickoff Matches Starting Jun 11:" : "Matches for Tomorrow:"
  }

  return(
    <>
    <NavBar/>
    <main>
      <h2>{getHeading()}</h2>
      <div>
        <MatchGrid matches={sortedMatches}/>
      </div>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default MatchesTomorrow;