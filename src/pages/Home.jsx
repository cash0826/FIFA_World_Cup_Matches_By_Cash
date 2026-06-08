import { useState, useEffect } from "react"
import { Outlet, Link } from "react-router-dom"
import { getMatches } from "../services/GetMatchesJSON"
import NavBar from "../components/NavBar"

function Home() {
  // State management of API fetch
  const [matches, setMatches] = useState([]);

  useEffect( () => {
    // Today's date, formatted for API param
    const today = new Date().toISOString().split("T")[0]
    console.log(today)

    // use getMatchesJSON for now (no date needed)
    getMatches()
      .then( (data) => setMatches(data))
      .catch( (error) => console.log("Error fetching matches: ", error));
  }, []);

  // Function to check if the World Cup has started
  // Heading will return "Matches for Today" if the event has started
  function getHeading(){
    const today = new Date()
    const kickoff = new Date(`2026-06-11T00:00:00`)
    return kickoff > today ? "Kickoff Matches Starting Jun 11:" : "Matches for Today"
  }

  return (
    <>
    <NavBar />

    <main>
      <h2>{getHeading()}</h2>
      <Outlet context= { {matches, setMatches} }/>
    </main>

    <footer>
      <div><Link to="/tomorrow">View Matches for Tomorrow</Link></div>
      <div><Link to="/search">Search Matches by Date</Link></div>
      <div><Link to="/about">About FIFA World Cup 2026</Link></div>
    </footer>
    </>
  )
}

export default Home;