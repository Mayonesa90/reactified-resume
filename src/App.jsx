import { Routes, Route } from 'react-router-dom';
import '@animxyz/react'
import { useState } from "react"
import { useSelector } from 'react-redux';
import Landing from './pages/Landing';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {

  const highLight = useSelector((state) => state.highLight.value) //returns current value (color) of highlight to use with a prop

  return (
        <Routes>
            <Route path="/" element={ 
                  <Landing position={'row-start-2'} />
            }/>
            <Route path="/about" element={ <About position={'row-start-1'} highlightAbout={highLight}/> }/>
            <Route path="/portfolio" element={ <Portfolio position={'row-start-1'} highlightPortfolio={highLight}/> }/>
            <Route path="/contact" element={ <Contact position={'row-start-1'} highlightContact={highLight}/> }/>
        </Routes>
            
  )
}

export default App
