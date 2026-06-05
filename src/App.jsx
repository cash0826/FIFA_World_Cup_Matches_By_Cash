import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import MatchesList from "./pages/MatchesList"
import MatchesCard from "./pages/MatchesCard"
import About from "./pages/About"
import MatchesTomorrow from "./pages/MatchesTomorrow"
import Search from "./pages/Search"
import MatchesByDate from "./pages/MatchesByDate"
import Standings from "./pages/Standings"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} >
            <Route path="" element={< MatchesList />} >
          </Route>
          </Route>
          <Route path="/about" element={< About />} /> 
          <Route path="/matchesTomorrow" element={< MatchesTomorrow />} />
          <Route path="/search" element={< Search />} >
            <Route path="" element= {< MatchesByDate />} />
          </Route>
          <Route path="/standings" element={< Standings />} />
          <Route path="*" element={< NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;