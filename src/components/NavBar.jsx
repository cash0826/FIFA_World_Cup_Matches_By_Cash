import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react"

function NavBar() {
  const [ countdown, setCountdown ] = useState("");

  useEffect( () => {
    const kickoff = new Date(`2026-06-11T15:00:00`)

    const timer = setInterval(() => {
      const now = new Date();
      const difference = kickoff - now;

      if (difference <= 0) {
        setCountdown("Event is Live")
        clearInterval(timer)
        return
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );
      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setCountdown(
        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
      )

    }, 1000);

  }, [])

  return (
    <nav className="navbar">
      <button><NavLink to="/">⚽</NavLink></button>
      <h2>FIFA World Cup Matches 2026🥅</h2>
      <p>{countdown}</p>
      <hr/>
      <br/>
    </nav>
  )
}

export default NavBar;