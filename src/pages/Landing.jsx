import Nav from "../components/Nav"

export default function Landing({toggleDarkMode, toggleBtn}) {
    return (
        <main className=" h-full grid content-center  bg-bg-color dark:bg-dm-bg-color">
            <Nav toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn}/>
        </main>
    )
}