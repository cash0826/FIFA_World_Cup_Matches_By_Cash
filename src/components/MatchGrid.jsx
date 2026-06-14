import MatchCard from "../components/MatchCard"
import '../styles/MatchGrid.css'

function MatchGrid( { matches } ) {

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