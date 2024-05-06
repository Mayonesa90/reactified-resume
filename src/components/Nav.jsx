import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

export default function Nav(){
    return (
    <>  
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
        <ul className=" font-inria-sans text-2xl">
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/portfolio">portfolio</Link>
            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>
        </ul>
    </>
    )
}