import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react"
import "./NavBar.css";

function NavBar() {

  const today = new Date().toDateString()

  return (
    <nav className="navbar">
      <button>
        <NavLink to="/">⚽</NavLink>
      </button>
      <h2>FIFA World Cup Matches 2026🥅</h2>
      <h3>{today}</h3>
    </nav>
  )
}

export default NavBar;