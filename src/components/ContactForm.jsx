import { useState } from "react"

export default function ContactForm(){


    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            message: "",
        }
    )

    function handleChange(event){
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <>
            <form>
                <section>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        onChange={handleChange}
                        name="name"
                    />
                </section>
                <section>
                <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        onChange={handleChange}
                        name="email"
                    />
                </section>
                <section>
                <label htmlFor="message">Message</label>
                    <textarea 
                        type="text"
                        onChange={handleChange}
                        name="message"
                    />
                </section>
            </form>
        </>
    
    )
}