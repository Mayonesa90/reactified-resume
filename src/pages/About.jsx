import Nav from "../components/Nav"
import { XyzTransition } from '@animxyz/react'


export default function About({highlightAbout, toggleDarkMode, toggleBtn}){
    return (
        <div className="wrapper bg-bg-color dark:bg-dm-bg-color  text-text-color dark:text-dm-text-color font-inriaSans font-thin">
            <Nav highlightAbout={highlightAbout} toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn}/>
            <main className="text-center">
                <h2 className="text-4xl mb-5">Introduction</h2>
                <p className=" max-w-96 mx-auto mb-5">Born in the suburbs of <strong>Stockholm</strong>, Sweden with raises in Peru, South America. 
                Single <strong>mom</strong> raising a daughter. 
                Trying to find a balance between strong and soft.
                </p>

                <p className=" max-w-96 mx-auto mb-5">
                Taking a leap to change careers and now in progress to become a <strong>Frontend-developer</strong>!
                </p>

                <p className=" max-w-96 mx-auto">
                Skills include: vanilla javascript, html, css, prototyping in Figma and Adobe inDesign, Adobe Illustrator, WCAG, git, GitHub, agile workflow and in this moment leraning React.
                </p>
            </main>
        </div>

    )
}