import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";

export default function Contact({highlightContact}){
    return (
        <>
        <Nav highlightContact={highlightContact}/>
        <main >
            <ContactForm />
        </main>
        
        </>
    )
}