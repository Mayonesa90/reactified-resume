import { Link, Routes, Route, useLocation } from 'react-router-dom';
import '@animxyz/react'

import Landing from './pages/Landing';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {

  const location = useLocation();

  return (
        <Routes>
            <Route path="/" element={ 
                  <Landing position={'row-start-2'}/>
            }/>
            <Route path="/about" element={ <About position={'row-start-1'} highlightAbout={'bg-highlight-link'}/> }/>
            <Route path="/portfolio" element={ <Portfolio position={'row-start-1'} highlightPortfolio={'bg-highlight-link'}/> }/>
            <Route path="/contact" element={ <Contact position={'row-start-1'} highlightContact={'bg-highlight-link'}/> }/>
        </Routes>
            
  )
}

export default App
