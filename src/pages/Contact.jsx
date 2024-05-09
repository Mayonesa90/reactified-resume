import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";

export default function Contact({highlightContact, toggleDarkMode, toggleBtn}){
    return (
        <>
        <Nav highlightContact={highlightContact} toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn}/>
        <main >
            <ContactForm />
        </main>
        
        </>
    )
}