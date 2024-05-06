import { Link, Routes, Route, useLocation } from 'react-router-dom';
import '@animxyz/react'
import { XyzTransition } from "@animxyz/react";

import Landing from './pages/Landing';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {

  const location = useLocation();

  return (
    <div>
    <header className="grid grid-cols-2 mt-8 mb-8">  
        <Link to="/">
        <header className="relative w-56">
        <h1 className=" pl-6 font-inria-sans font-light text-5xl text-wrap z-10 w-56 relative">mayaArza<br></br>paloBjörk<br></br>lund</h1>
        <div className="flex flex-col gap-4 top-0 w-56 absolute z-0  mt-4">
            <div className=" bg-highlight-h1 h-8 "></div>
            <div className=" bg-highlight-h1 h-8 "></div>
            <div className=" bg-highlight-h1 h-8 w-28"></div>
        </div>
        </header>
        </Link>
        <ul className={`font-inria-sans text-2xl col-start-2  text-right grid gap-y-3 mt-4`}>
            <li>
                <Link to="/about" className={`h-8 inline-block pl-2 pr-6 hover:bg-highlight-link `}>about</Link>
            </li>
            <li>
                <Link to="/portfolio" className={` h-8 inline-block pl-2 pr-6 hover:bg-highlight-link `}>portfolio</Link>
            </li>
            <li>
                <Link to="/contact" className={`h-8 inline-block pl-2 pr-6 hover:bg-highlight-link `}>contact</Link>
            </li>
        </ul>
    </header>
    
    {/* <XyzTransition 
            appear
            xyz="fade in-left-100% out-right-100%"
            mode="out-in"
    >
              <div key={location.key}>
                <Routes location={location}>
                  <Route exact path="/">
                    <Landing  />                  
                  </Route>
                  <Route exact path="/about">
                    <About  />
                  </Route>
                  <Route exact path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route exact path="/about">
                    <Contact/>
                  </Route>
                </Routes>
              </div>
      </XyzTransition> */}

    </div>
  )

  // return (
  //   <div>
  //       <Routes>
  //           <Route path="/" element={ 
  //                 <Landing position={'row-start-2'}/>
  //           }/>
  //           <Route path="/about" element={ <About position={'row-start-1'} highlightAbout={'bg-highlight-link'}/> }/>
  //           <Route path="/portfolio" element={ <Portfolio position={'row-start-1'} highlightPortfolio={'bg-highlight-link'}/> }/>
  //           <Route path="/contact" element={ <Contact position={'row-start-1'} highlightContact={'bg-highlight-link'}/> }/>
  //       </Routes>
            
  //   </div>
  // )
}

export default App
