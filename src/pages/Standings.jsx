import { useState, useEffect } from "react"
import { getStandings } from "../services/GetStandings"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function Standings() {
  const [ standings, setStandings ] = useState([]);

  useEffect( () => {
    getStandings()
      .then( (data) => setMatches(data))
      .catch( (error) => console.log("Error fetching matches: ", error));
  }, []);

  return(
    <>
      <NavBar />
      <main>
        <h2>Standings</h2>
        {standings.map(standing => (
          <div className="standings-grid">
            <p>{standing.group} | Win | Loss | Draw | Points </p>
            <StandingsGrid
              key={standing.id}
              match={standing}
            />
          </div>
        ))}
      </main>
      <Footer/>
    </>
  )
}

export default Standings;