import Nav from "../components/Nav"
import { XyzTransition } from '@animxyz/react'


export default function About({highlightAbout}){
    return (
        <>
        <Nav highlightAbout={highlightAbout}/>
        <main className="mx-auto">
            <h2>I'm About</h2>
        </main>
        </>

    )
}