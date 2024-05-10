import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import ToggleBtn from "./ToggleBtn";
import ToggleBtnLm from '../assets/toggle-lm.svg'
import ToggleBtnDm from '../assets/toggle-dm.svg'


export default function Nav({ position, highlightAbout, highlightPortfolio, highlightContact}){
    
    const darkMode = useSelector((state) => state.darkMode.value) //Gets value of darkMode 

    return (
    <>
    {darkMode ? <ToggleBtn toggleBtn={ToggleBtnDm} /> : <ToggleBtn toggleBtn={ToggleBtnLm} /> } 
    <header className="grid grid-cols-2 mt-10 z-10 sticky font-inriaSans font-thin max-h-max self-start">
        <Link to="/">
            <header className="relative w-56 ">
                <h1 className=" pl-6  text-5xl text-wrap z-10 w-56 relative dark:text-dm-text-color">mayaArza<br></br>paloBjörk<br></br>lund</h1>
                <div className="flex flex-col gap-4 top-0 w-56 absolute z-0  mt-4">
                    <div className=" bg-highlight-h1 dark:bg-dm-highlight-h1 h-8 shadow-md shadow-moon"></div>
                    <div className=" bg-highlight-h1 dark:bg-dm-highlight-h1 h-8 shadow-md shadow-moon"></div>
                    <div className=" bg-highlight-h1 dark:bg-dm-highlight-h1 h-8 w-28 shadow-md shadow-moon"></div>
                </div>
            </header>
        </Link>
        <ul className={`font-inria-sans text-2xl col-start-2 ${position} text-right grid gap-y-3 mt-4`}>
            <li>
                <Link 
                    to="/about" 
                    className={`${highlightAbout} h-8 inline-block pl-2 pr-6 hover:bg-highlight-link shadow-md shadow-moon 
                    dark:text-dm-text-color dark:hover:bg-dm-highlight-link`}>
                        about
                </Link>
            </li>
            <li>
                <Link 
                    to="/portfolio" 
                    className={`${highlightPortfolio} h-8 inline-block pl-2 pr-6 hover:bg-highlight-link shadow-md shadow-moon 
                    dark:text-dm-text-color dark:hover:bg-dm-highlight-link`}>
                        portfolio
                </Link>
            </li>
            <li>
                <Link 
                    to="/contact" 
                    className={`${highlightContact} h-8 inline-block pl-2 pr-6 hover:bg-highlight-link shadow-md shadow-moon 
                    dark:text-dm-text-color dark:hover:bg-dm-highlight-link`}>
                        contact
                </Link>
            </li>
        </ul>
    
    </header>
    
    </>
    )
}