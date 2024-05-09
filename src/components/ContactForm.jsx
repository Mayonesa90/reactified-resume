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

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit} 
                className="shadow-md shadow-moon rounded-lg flex flex-col max-w-fit p-7 gap-5 mx-auto">
                <h2 className="text-center font-bold text-xl">Say hi!</h2>
                <section className="grid">
                    <label htmlFor="name" className="text-xs">NAME:</label>
                    <input 
                        type="text"
                        onChange={handleChange}
                        name="name"
                        id="name"
                        value={formData.name}
                        className=" shadow-inner shadow-moon rounded-md p-2"
                    />
                </section>
                <section className="grid">
                <label htmlFor="email"  className="text-xs">EMAIL:</label>
                    <input 
                        type="email"
                        onChange={handleChange}
                        name="email"
                        id="email"
                        value={formData.email}
                        className="shadow-inner shadow-moon rounded-md p-2"
                    />
                </section>
                <section className="grid">
                <label htmlFor="message"  className="text-xs">MESSAGE:</label>
                    <textarea 
                        onChange={handleChange}
                        name="message"
                        id="message"
                        value={formData.message}
                        className="shadow-inner shadow-moon rounded-md p-2"
                    />
                </section>
                <button className=" bg-highlight-h1 shadow-md shadow-moon rounded-lg py-2 text-xs hover:bg-dm-highlight-link">SEND</button>
            </form>
        </>
    
    )
}