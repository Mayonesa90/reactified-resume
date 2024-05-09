import { useState } from "react"
import { useEffect } from "react"

export default function FetchData(){

    const [repos, setRepos] = useState([])

    useEffect(() => {
        async function getRepos(){
            const res = await fetch("https://api.github.com/users/mayonesa90/repos")
            const data = await res.json()
            setRepos(data)
        }
        getRepos()
        // fetch("https://api.github.com/users/mayonesa90/repos")
        //     .then(res => res.json())
        //     .then(data => setRepos(data))
        //     .catch(error => console.error("Error fetching repos:", error))
    }, [])


    return (
        <section className=" max-h-screen">
            <ul className=" ">
                {repos.map(repo => (
                    <li key={repo.id} className="p-2">
                        <a className=" hover:bg-highlight-h1 p-2 text-xs rounded-sm" href={repo.html_url} >{repo.name.toUpperCase()}</a>
                    </li>
                ))}
            </ul>
        </section>
        
    )
}