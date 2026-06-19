import RowCard from "../components/RowCard"
import '../styles/StandingsGrid.css'

function StandingsGrid( { standing } ) {

  if (standing.length === 0){
    return <p>Loading Events...</p>
  }

  const rows = standing.rows

  return (
    <>
      <div className="group-div">
        <div className="header-div">
          <h4><u>{standing.group}</u></h4>
          <h4>
            Team:
          </h4>
          <h4>
            Wins:
          </h4>
          <h4>
            Losses:
          </h4>
          <h4>
            Draws:
          </h4>
          <h4>
            Points:
          </h4>
        </div>
        {rows.map(row => (
          <RowCard
            key={row.id}
            row={row}
          />
        ))}
      </div>    
    </>
  )
}

export default StandingsGrid;