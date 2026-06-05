import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar">
      <btn>
        <NavLink to="/">Home</NavLink>
      </btn>
      <h1>These are the 2026 FIFA World Cup Matches!⚽ </h1>
    </nav>
  )
}

export default NavBar;