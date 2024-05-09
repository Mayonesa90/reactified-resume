import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";

export default function Contact({highlightContact, toggleDarkMode, toggleBtn}){
    return (
        <div className="wrapper bg-bg-color dark:bg-dm-bg-color text-text-color dark:text-dm-text-color font-inriaSans font-thin">
            <Nav highlightContact={highlightContact} toggleDarkMode={toggleDarkMode} toggleBtn={toggleBtn}/>
            <main className="grid content-center">
                <ContactForm />
            </main>
        </div>
    )
}