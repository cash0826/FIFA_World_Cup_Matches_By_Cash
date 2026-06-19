import { useState, useEffect } from "react"
import { getStandings } from "../services/GetStandings"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import StandingsGrid from "../components/StandingsGrid"

function Standings() {
  const [ standings, setStandings ] = useState([]);

  useEffect( () => {
    getStandings()
      .then( (data) => setStandings(data))
      .catch( (error) => console.log("Error fetching standings: ", error));
  }, []);

  return(
    <>
      <NavBar />
      <main>
        <h2>Standings:</h2>
        {standings.map(standing => (
          <StandingsGrid
            key={standing.id}
            standing={standing}
          />
        ))}
      </main>
      <Footer/>
    </>
  )
}

export default Standings;