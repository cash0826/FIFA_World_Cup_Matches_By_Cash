import MatchCard from "../components/MatchCard"

function MatchGrid( {matches} ) {

  return (
    <div>
      {matches.map(match => (
        <MatchCard
          key={match.id}
          match={match}
        />
      ))}
    </div>
  )
}