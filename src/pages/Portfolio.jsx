import Nav from "../components/Nav";

export default function Portfolio({highlightPortfolio}){
    return (
        <>  
            <Nav highlightPortfolio={highlightPortfolio} pathLanding="/" pathAbout="/about" pathPortfolio="/portfolio" pathContact="/contact" />
            <h1>I'm Portfolio</h1>
        </>
        
    )
}