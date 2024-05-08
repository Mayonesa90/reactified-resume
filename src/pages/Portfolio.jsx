import FetchData from "../components/FetchData";
import Nav from "../components/Nav";

export default function Portfolio({highlightPortfolio}){
    return (
        <>  
            <Nav highlightPortfolio={highlightPortfolio} />
            <main className="mx-auto">
                <h2 className=" text-3xl">Repos from Github</h2>
                <FetchData />
            </main>
            
        </>
        
    )
}