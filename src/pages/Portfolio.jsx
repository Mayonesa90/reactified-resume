import FetchData from "../components/FetchData";
import Nav from "../components/Nav";

export default function Portfolio({highlightPortfolio, toggleDarkMode, toggleBtn}){
    return (
        <div className=" bg-bg-color dark:bg-dm-bg-color  text-text-color dark:text-dm-text-color">  
            <Nav highlightPortfolio={highlightPortfolio} toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn}/>
            <main className="mx-auto overflow-scroll text-center ">
                <h2 className=" text-3xl ">Repositories</h2>
                <h3 className="mb-7">from GitHub</h3>
                <FetchData />
                
            </main>
            
            </div>
        
    )
}