import '../styles/repositories.scss'
import { RepositoryItem } from "./RepositoryItem";
import {useState, useEffect} from 'react'

interface Repository {
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList() {

    const [repositories, useRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/lucassousa12/repos')
        .then(response => response.json())
        .then(data => useRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository = {repository}/>
                })}
            </ul>
        </section>
    );
}
