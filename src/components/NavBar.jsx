import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react"
import { getTimeRemaining } from "../utils/getTimeRemaining"
import trionda from '../assets/ball-trionda-2026.png'
import CountDownClock from "../components/CountDownClock"

function NavBar() {
  const [ countdown, setCountdown ] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    live: false
  });

  useEffect( () => {
    // World Cup 2026 Kick Off: First Match
    const kickoff = new Date(`2026-06-11T15:00:00`)

    // Update on First Render
    setCountdown(getTimeRemaining(kickoff));
    
    // Imported Helper Function (TimeRemaining)
    const timer = setInterval(() => {
      setCountdown(getTimeRemaining(kickoff))
    }, 1000);

    // Clear Timer
    return () => clearInterval(timer);
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <button>
            <NavLink to="/">
              <img id="trionda" src={trionda} alt="Trionda 2026" title="Trionda 2026"/>
              {/* Home */}
            </NavLink>
          </button>
        </div>

        <div className="nav-container">
          <h2>FIFA World Cup Matches 2026🥅</h2>
        </div>

        <div className="nav-container">
          <CountDownClock countdown={countdown}/>
        </div>
      </nav>
      <br/>
    </>
  )
}

export default NavBar;