import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import MatchesList from "./MatchesList"

function Home() {

  // Dates
  let today = new Date().toISOString().split("T")[0]
  let kickoff = `2026-06-11`

  return (
    <>
    <NavBar />
    <main>
      <h2>Matches for today:</h2>
      <MatchesList/>
    </main>
    </>
  )
}

export default Home;