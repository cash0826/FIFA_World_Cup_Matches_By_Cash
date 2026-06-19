import '../styles/RowCard.css'
import { teams } from "../utils/teams"

function RowCard( { row } ) {

  const team = teams.find(team => team.name === row.team)
  const teamFlag = team ? new URL(`../assets/flags/${team.flag}`, import.meta.url).href : '' 

  // Possible sort needed to order teams by their position in the group, but API response does this already

  return (
    <div className="row-div">
      <img
        className="flag"
        src={teamFlag}
        title={row.team}
        alt={row.team}
      />      
      <p className="teamCode">
        <b>{row.teamCode}</b>
      </p>
      <p>
        {row.wins}
      </p>
      <p>
        {row.losses}
      </p>
      <p>
        {row.draws}
      </p>
      <p>
        {row.points}
      </p>                   
    </div>
  )

}

export default RowCard;