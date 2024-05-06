import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={ <Landing /> }/>
            <Route path="/about" element={ <About /> }/>
            <Route path="/portfolio" element={ <Portfolio /> }/>
            <Route path="/contact" element={ <Contact /> }/>
        </Routes>
        </Router>
      
    </>
  )
}

export default App
