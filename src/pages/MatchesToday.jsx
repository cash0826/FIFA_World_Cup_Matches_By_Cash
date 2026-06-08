import { useOutletContext } from "react-router-dom"
import MatchGrid from "../components/MatchGrid"

function MatchesToday() {
  const { matches} = useOutletContext();

  if (matches.length === 0){
    return <p>Loading Events...</p>
  }

  return(
    <>
    <div>
      <MatchGrid matches={matches}/>
    </div>
    </>
  )
}

export default MatchesToday;