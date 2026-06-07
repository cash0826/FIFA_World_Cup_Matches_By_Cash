import { useState, useEffect, useRef } from "react"
import { getMatches } from "../services/GetMatchesJSON"
import NavBar from "../components/NavBar"
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

  // Search
  async function handleSubmit(e) {
    e.preventDefault();

    setSearchedDate(query)

    console.log(query)

    // Await the API Fetch
    try {
      // use query as parameter for getMatches()
      const data = await getMatches();
      setMatchesBySearch(data);
    } catch (error) {
      console.error("Error fetching matches: ", error)
    }
    
  }

  return(
    <>
    <NavBar/>

    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <label>Search by Date:</label>
        <input
          type="date"
          required
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Go!⚽</button>
      </form>
    </div>
    
    <main>
      {
        searchedDate
        ? <h2>Matches for {searchedDate} </h2>
        : null 
      }
      <div>
        <MatchGrid matches={matchesBySearch}/>
      </div>
    </main>
    </>
  )
}

export default Search;