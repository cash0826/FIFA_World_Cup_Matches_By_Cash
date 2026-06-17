import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import MatchesToday from "./pages/MatchesToday"
import MatchesTomorrow from "./pages/MatchesTomorrow"
import MatchesBySearch from "./pages/MatchesBySearch"
import Standings from "./pages/Standings"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} >
            <Route index element={<MatchesToday />} />
          </Route>
          <Route path="/tomorrow" element={<MatchesTomorrow/>}/>
          <Route path="/search" element={< MatchesBySearch />} />        
          <Route path="/about" element={< About />} /> 
          <Route path="/standings" element={< Standings />} />
          <Route path="*" element={< NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;