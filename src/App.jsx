import { Link, Routes, Route, useLocation } from 'react-router-dom';
import '@animxyz/react'
import { useState } from "react"
import Landing from './pages/Landing';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ToggleBtnLm from "./assets/toggle-lm.svg"
import ToggleBtnDm from "./assets/toggle-dm.svg"

function App() {

  const location = useLocation();
  
  const [darkMode, setDarkMode] = useState(false)
  const [toggleBtn, setToggleBtn] = useState(ToggleBtnLm)

  function toggleDarkMode(){
      setDarkMode(prev => !prev)
      setToggleBtn(darkMode ? ToggleBtnDm : ToggleBtnLm)
  }

  return (
        <Routes>
            <Route path="/" element={ 
                  <Landing position={'row-start-2'} toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn}/>
            }/>
            <Route path="/about" element={ <About toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn} position={'row-start-1'} highlightAbout={'bg-highlight-link'}/> }/>
            <Route path="/portfolio" element={ <Portfolio toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn} position={'row-start-1'} highlightPortfolio={'bg-highlight-link'}/> }/>
            <Route path="/contact" element={ <Contact toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn} position={'row-start-1'} highlightContact={'bg-highlight-link'}/> }/>
        </Routes>
            
  )
}

export default App
