import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import MatchesToday from "./pages/MatchesToday"
import About from "./pages/About"
import MatchesTomorrow from "./pages/MatchesTomorrow"
import Search from "./pages/Search"
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
          <Route path="/search" element={< Search />} />        
          <Route path="/about" element={< About />} /> 
          <Route path="/standings" element={< Standings />} />
          <Route path="*" element={< NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;