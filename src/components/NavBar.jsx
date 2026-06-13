import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react"
import { getTimeRemaining } from "../utils/getTimeRemaining"
import '../styles/NavBar.css'
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
    // World Cup 2026 Kick Off: First Match JUN 11 // CHANGING FOR DEVELOPMENT
    const kickoff = new Date(`2026-06-20T15:00:00`)

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
        
        <NavLink to="/" className="navbar-ball-logo">
          <img src={trionda} id="trionda" alt="Trionda 2026" title="Trionda 2026"/>
        </NavLink>
        <h1 className="navbar-heading">FIFA World Cup Matches 2026</h1>
        <CountDownClock countdown={countdown}/>
        
      </nav>
      <br/>
    </>
  )
}

export default NavBar;