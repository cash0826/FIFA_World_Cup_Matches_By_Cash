import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <button>
        <NavLink to="/">⚽</NavLink>
      </button>
      <h2>FIFA World Cup Matches 2026🥅</h2>
    </nav>
  )
}

export default NavBar;