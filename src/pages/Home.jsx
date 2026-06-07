import { useState, useEffect } from "react"
import { Outlet, Link } from "react-router-dom"
import { getMatches } from "../services/GetMatchesJSON"
import NavBar from "../components/NavBar"

function Home() {
  // Dates
  let today = new Date().toISOString().split("T")[0]
  let kickoff = `2026-06-11`

  // State management of API fetch
  const [matches, setMatches] = useState([]);

  useEffect( () => {

    // use getMatchesJSON for now (no date needed)
    getMatches()
      .then( (data) => setMatches(data))
      .catch( (error) => console.log("Error fetching matches: ", error));
  }, []);

  return (
    <>
    <NavBar />
    <main>
      <h2>Matches for today:</h2>
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