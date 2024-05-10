import Nav from "../components/Nav"

export default function About({position, highlightAbout}){

    return (
        <div className="wrapper bg-bg-color dark:bg-dm-bg-color  text-text-color dark:text-dm-text-color font-inriaSans font-thin ">
            <Nav highlightAbout={highlightAbout} position={position}/>
            <main className=" content-start">
                <article className="max-w-96 text-center mx-auto gap-y-3">
                    <h2 className="text-4xl mb-5">Introduction</h2>
                    <p className="  mx-auto mb-5">Born in the suburbs of <strong className="text-lg">Stockholm</strong>, Sweden with raises in Peru, South America. 
                     Single <strong className="text-lg">mom</strong> raising a daughter. </p>
                
                    <p className="mb-5">Trying to find a balance between strong and soft.</p>

                    <p className="mb-5">
                    Taking a leap to change careers and now in progress to become a <strong className="text-lg">Frontend-developer</strong> :)
                    </p>

                <p className=" max-w-96 mx-auto">
                <strong className="text-lg">Skills include:</strong> vanilla javascript, html, css, prototyping in Figma and Adobe inDesign, Adobe Illustrator, WCAG, git, GitHub, agile workflow and in this moment leraning React.
                </p>
                </article>

            </main>
        </div>

    )
}