import Nav from "../components/Nav"
import { XyzTransition } from '@animxyz/react'


export default function About({highlightAbout}){
    return (

            <XyzTransition         
            appear
            xyz="fade in-left-100% out-right-100%"
            mode="out-in">
            <Nav highlightAbout={highlightAbout}/>
            </XyzTransition>

    )
}