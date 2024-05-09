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

    }, [])


    return (
        <section className=" flex flex-col">
            <ul className=" flex flex-col overflow-scroll">
                {repos.map(repo => (
                    <li key={repo.id} className="p-2">
                        <a className=" hover:bg-highlight-h1 p-2 text-md rounded-sm dark:hover:bg-dm-highlight-link" href={repo.html_url} >{repo.name.toUpperCase()}</a>
                    </li>
                ))}
            </ul>
        </section>
        
    )
}