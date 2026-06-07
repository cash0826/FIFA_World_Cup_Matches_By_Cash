import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMatches } from "../services/GetMatchesJSON"
import NavBar from "../components/NavBar"
import MatchesList from "./MatchesList"

function Home() {
  const [matches, setMatches] = useState([]);

  useEffect( () => {

    // use getMatchesJSON for now (no date needed)
    getMatches()
      .then( (data) => setMatches(data))
      .catch( (error) => console.log("Error fetching matches: ", error));
  }, []);

  // Dates
  let today = new Date().toISOString().split("T")[0]
  let kickoff = `2026-06-11`

  return (
    <>
    <NavBar />
    <main>
      <h2>Matches for today:</h2>
      <Outlet context= { {matches, setMatches} }/>
    </main>
    </>
  )
}

export default Home;