import Nav from "../components/Nav"

export default function Landing({toggleDarkMode, toggleBtn}) {
    return (
        <main className=" h-full grid content-center">
            <Nav toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn}/>
        </main>
    )
}