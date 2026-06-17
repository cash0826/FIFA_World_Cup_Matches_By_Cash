import '../styles/Search.css';
import { useState, useEffect, useRef } from "react"
import { getMatches } from "../services/GetMatchesJSON"
import { formatDisplayDate } from "../utils/formatDisplayDate"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import MatchGrid from "../components/MatchGrid"

function Search() {
  // State Management of API Fetch
  const [matchesBySearch, setMatchesBySearch] = useState([]);
  // State Management of Search Query
  const [query, setQuery] = useState("");
  const [searchedDate, setSearchedDate ] = useState("");

  // Focus using useRef
  const inputRef = useRef(null); 
  useEffect(() => {
    inputRef.current.focus();
  }, []); 

  // Separate formatter function to display after a search
  const formattedDate = searchedDate ? formatDisplayDate(searchedDate) : "" ;

  // Search function
  async function handleSubmit(e) {
    e.preventDefault();
    setSearchedDate()
    // Await the API Fetch
    try {
      // use query as parameter for getMatches()
      const data = await getMatches(query);
      setMatchesBySearch(data);
    } catch (error) {
      console.error("Error fetching matches: ", error)
    }
  }

  // Sort Matches in order of occurrence. Variable to be used in jsx return()
  const sortedMatches = matchesBySearch.sort((a, b) => a.startTimestamp - b.startTimestamp)

  return(
    <>
    <NavBar/>
    
    <main>
      <div className="search-bar">
        <form className="search" onSubmit={handleSubmit}>
          <p><label htmlFor="search">Search by Date:</label></p>
          <input
            type="date"
            id="search"
            required
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Go!</button>
        </form>
      </div>
        {/* Show after user input */}
        {formattedDate && (
          <div className="search-results-div">
            <h2>Matches for {formatDisplayDate(searchedDate)}:</h2>
          </div>
        )}

        {formattedDate && (
          <>
            <MatchGrid matches={matchesBySearch}/>
          </>
        )}        
      
    
    </main>

    <Footer/>
    </>
  )
}

export default Search;