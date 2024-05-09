import Nav from "../components/Nav"
import { XyzTransition } from '@animxyz/react'


export default function About({highlightAbout, toggleDarkMode, toggleBtn}){
    return (
        <>
        <Nav highlightAbout={highlightAbout} toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn}/>
        <main className="mx-auto">
            <h2>Who am I?</h2>
            <p>Optimistic, tired, creative.</p>
        </main>
        </>

    )
}