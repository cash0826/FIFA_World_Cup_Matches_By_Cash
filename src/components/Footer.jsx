import { Link } from "react-router-dom"

function Footer() {

  return(
    <>
      <footer>
        <Link to="/">Home</Link>
        <Link to="/tomorrow">View Matches for Tomorrow</Link>
        <Link to="/search">Search Matches by Date</Link>
        <Link to="/about">About FIFA World Cup 2026</Link>
      </footer>
    </>
  )
}

export default Footer;