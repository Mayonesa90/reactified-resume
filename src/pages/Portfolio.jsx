import Nav from "../components/Nav";

export default function Portfolio({highlightPortfolio}){
    return (
        <>  
            <Nav highlightPortfolio={highlightPortfolio} />
            <main className="mx-auto">
                <h1>I'm Portfolio</h1>
            </main>
            
        </>
        
    )
}