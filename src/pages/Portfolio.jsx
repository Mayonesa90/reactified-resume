import FetchData from "../components/FetchData";
import Nav from "../components/Nav";

export default function Portfolio({highlightPortfolio, toggleDarkMode, toggleBtn, position}){
    return (
        <div className="wrapper bg-bg-color dark:bg-dm-bg-color  text-text-color dark:text-dm-text-color font-inriaSans font-thin">  
            <Nav highlightPortfolio={highlightPortfolio} toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn}/>
            <main className="text-center mt-10 grid overflow-scroll ">
                <h2 className="text-4xl ">Repositories</h2>
                <h3 className="mb-7">from GitHub</h3>
                <FetchData />    
            </main>    
        </div>
        
    )
}