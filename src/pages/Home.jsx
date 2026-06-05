import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import MatchesList from "./MatchesList"

function Home() {
  return (
    <>
    <NavBar />
    <main>
      <h2>Line ups:</h2>
      <MatchesList/>
    </main>
    </>
  )
}

export default Home;