import { useState } from "react"
import { useEffect } from "react"

export default function FetchData(){

    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/mayonesa90/repos")
            .then(res => res.json())
            .then(data => setRepos(data))
            .catch(error => console.error("Error fetching repos:", error))
    }, [])


    return (
        <section className=" max-h-screen">
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url}>{repo.name}</a>
                    </li>
                ))}
            </ul>
        </section>
        
    )
}