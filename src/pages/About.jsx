import Nav from "../components/Nav"
import { XyzTransition } from '@animxyz/react'


export default function About({highlightAbout, toggleDarkMode, toggleBtn}){
    return (
        <div className=" bg-bg-color dark:bg-dm-bg-color  text-text-color dark:text-dm-text-color">
        <Nav highlightAbout={highlightAbout} toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn}/>
        <main className="mx-auto">
            <h2>Who am I?</h2>
            <p>Optimistic, tired, creative.</p>
        </main>
        </div>

    )
}