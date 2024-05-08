import Nav from "../components/Nav"
import { XyzTransition } from '@animxyz/react'


export default function About({highlightAbout}){
    return (
        <>
        <Nav highlightAbout={highlightAbout}/>
        <main className="mx-auto">
            <h2>Who am I?</h2>
            <p>Optimistic, tired, creative.</p>
        </main>
        </>

    )
}