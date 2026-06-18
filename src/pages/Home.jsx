import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { getMatches } from "../services/GetMatches"
import { formatToday } from "../utils/formatToday"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

// Moved to outside of the component (static)
const today = new Date();
const todayFormatted = formatToday(today)

function Home() {
  // State management of API fetch
  const [matches, setMatches] = useState([]);

  useEffect( () => {
    getMatches(todayFormatted) // todayFormatted for API
      .then( (data) => setMatches(data))
      .catch( (error) => console.log("Error fetching matches: ", error));
  }, []);

  // Function to check if the World Cup has started
  // Heading will return "Matches for Today" if the event has started
  function getHeading(){
    const kickoff = new Date(`2026-06-11T00:00:00`)
    return kickoff > today ? "Stay Tuned!" : "Matches for Today:"
  }

  return (
    <>
      <NavBar />
      <main>
        <h2>{getHeading()}</h2>
        <Outlet context= { {matches, setMatches} }/>
      </main>
      <Footer/>
    </>
  )
}

export default Home;