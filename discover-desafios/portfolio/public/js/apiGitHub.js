import {resultados, msgAlert} from "./search.js"

export const pesquisaPerfil = async(usuario)  => {
    let myStorage = window.localStorage
    
    const url = `https://api.github.com/users/${usuario}`
    const dados =  await fetch(url)
    const perfil = await dados.json()
    await myStorage.setItem('user', JSON.stringify(perfil))

    const dataRepos = await fetch(`https://api.github.com/users/${usuario}/repos`)
    const repos = await dataRepos.json()
    await myStorage.setItem('repos', JSON.stringify(repos))

    if(perfil.message == "Not Found") {
        return msgAlert("Usuário não encontrado, tente novamente.")
    } else {
        return resultados()
    }
    
}
   

