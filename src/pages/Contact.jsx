import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";

export default function Contact({highlightContact}){
    return (
        <>
        <Nav highlightContact={highlightContact}/>
        <h1>I'm Contact</h1>
        <ContactForm />
        </>
    )
}