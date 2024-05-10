import { Routes, Route, useLocation } from 'react-router-dom';
import '@animxyz/react'
import { useState } from "react"
import { useSelector } from 'react-redux';
import Landing from './pages/Landing';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
// import ToggleBtnLm from "./assets/toggle-lm.svg"
// import ToggleBtnDm from "./assets/toggle-dm.svg"
// import { toggleHighlight } from './reducers/highlightSlice';

function App() {

  const location = useLocation();

  const darkMode = useSelector((state) => state.darkMode.value)

  const highLight = useSelector((state) => state.highLight.value)

  // const [highLight, setHighLight] = useState('bg-highlight-link')

  console.log(highLight)
  //Actions
  // function toggleHighLight(){
  //     setHighLight(darkMode ? "bg-highlight-link" : "bg-dm-highlight-link")
  // }

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
