import Nav from "../components/Nav"

export default function About({position, highlightAbout}){

    return (
        <div className="wrapper bg-bg-color dark:bg-dm-bg-color  text-text-color dark:text-dm-text-color font-inriaSans font-thin ">
            <Nav highlightAbout={highlightAbout} position={position}/>
            <main className="text-center self-start">
                <h2 className="text-4xl mb-5">Hello! 👩🏻‍💻</h2>
                <p className=" max-w-96 mx-auto mb-5">My name is Maya. A plantloving-mom from the suburbs of <strong>Stockholm 🇸🇪</strong></p> 
                
                
                <p className=" max-w-96 mx-auto mb-5">
                In progress of becoming a <strong className="text-lg">Frontend-developer </strong> 
                 and enjoying the journey 👩🏻‍🦯
                </p>

                <p className=" max-w-96 mx-auto mb-5">
                <strong className="text-lg">Skills</strong> include: 
                vanilla javascript, html, css, prototyping in Figma and Adobe inDesign, 
                Adobe Illustrator, WCAG, git, GitHub, agile workflow and in writning moment 
                learning React.
                </p>

                <p className="text-xs">Ps. Isn't the moon lovely tonight?</p>
            </main>
        </div>

    )
}