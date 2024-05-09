import Nav from "../components/Nav"

export default function Landing({position, toggleDarkMode, toggleBtn}) {
    return (
        <main className="wrapper grid content-center bg-bg-color dark:bg-dm-bg-color">
            <Nav toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn} position={position}/>
        </main>
    )
}