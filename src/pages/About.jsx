import Nav from "../components/Nav"

export default function About({position, highlightAbout}){
    return (
        <>
        <Nav position={position} highlightAbout={highlightAbout}/>
        <h1>I'm About</h1>
        </>
        
    )
}