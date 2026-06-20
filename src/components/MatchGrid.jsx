import MatchCard from "../components/MatchCard"
import '../styles/MatchGrid.css'

function MatchGrid( { matches } ) {
  const today = new Date()
  const kickoff = new Date(`2026-06-11T00:00:00`)

  if (kickoff > today) {
    return <p>Kickoff starts June 11th 2026</p>
  }

  // Handle 404 response from API
  if (matches.message) {
    return <p>{matches.message}</p>
  }

  if (matches.length === 0){
    return <p>Loading Events...</p>
  }  

  return (
    <div className="matches-list-div">
      {matches.map(match => (
        <MatchCard
          key={match.id}
          match={match}
        />
      ))}
    </div>
  )
}

export default MatchGrid;