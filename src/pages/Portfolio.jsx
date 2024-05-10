import FetchData from "../components/FetchData";
import Nav from "../components/Nav";

export default function Portfolio({highlightPortfolio, position}){
    return (
        <div className="wrapper bg-bg-color dark:bg-dm-bg-color  text-text-color dark:text-dm-text-color font-inriaSans font-thin">  
            <Nav highlightPortfolio={highlightPortfolio} position={position}/>
            <main className="text-center mt-10 grid overflow-scroll mb-10">
                <h2 className="text-4xl ">GitHub Repositories</h2>
                <h3 className="mb-7 text-xs">( don't judge )</h3>
                <FetchData />    
            </main>    
        </div>
        
    )
}