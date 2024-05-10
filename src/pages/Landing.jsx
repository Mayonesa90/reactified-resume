import Nav from "../components/Nav"

export default function Landing({position}) {
    return (
        <main className="wrapper grid content-center bg-bg-color dark:bg-dm-bg-color">
            <Nav position={position}/>
        </main>
    )
}