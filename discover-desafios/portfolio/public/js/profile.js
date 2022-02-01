let name = document.querySelector('#name')
let profileAvatar = document.querySelector('#profile-avatar')
let postAvatar = document.querySelector('#post-avatar')
let bio = document.querySelector('#bio')
let sair = document.querySelector('#btn-sair')


//Pega as Div e Sections do Profile
let allInformations = document.querySelector('.allInformations')
let myProjects = document.querySelector('.my-projects')

//Faz o molde da sessão de informações
function moldarInformations(name, nameIcon) {    
    allInformations.innerHTML += 
    `   
        <div id = "information" >
            <i class="${nameIcon}"></i>
            <p id="infoP">${name}</p>
        </div>
    `
}
//Faz o molde dos repositórios
function moldarRepos(nome, description, star, branch, tech ) {    
    myProjects.innerHTML += 
    `   
    <a href="#">
        <div class="project box-color space-between">
                
            <div>
                <p class="p1" class="align-center">
                    <i class="far fa-folder"></i>
                    ${nome}
                </p>
                <p class="p2">${description}</p>
            </div>
    
        
            <div class="project-inferior flex" class="align-center">
                <div>
                    <p id="project-star" class="align-center">
                        <i class="far fa-star"></i>
                        ${star}
                    </p>
                    
                    <p id="project-branch" class="align-center">
                        <i class="fas fa-code-branch"></i>
                        ${branch}
                    </p>
                </div>
                
                <p id="project-tech" class="flex align-center">
                    <span></span>
                    ${tech}
                </p>
            </div>
        
        </div>
    </a>
    `
}

//Preenche o profile com as informações que vem da API do GitHub e ficam armazenadas no LocalStorage.
function preencherPerfil() {

    let myStorage = window.localStorage
    let user = JSON.parse(myStorage.getItem('user'))
    let repos = JSON.parse(myStorage.getItem('repos'))
   
    // Profile
    profileAvatar.setAttribute('src', user.avatar_url)
    name.innerText = user.name
    bio.innerText = user.bio

    //Informations
    user.location ? moldarInformations(user.location, "fas fa-map-marker-alt") : ""
    user.company ? moldarInformations(user.company, "fas fa-briefcase") : ""
    user.login ? moldarInformations(user.login, "fab fa-github") : ""
    user.twitter_username ? moldarInformations(user.twitter_username, "fab fa-twitter") : ""
    user.email ? moldarInformations(user.email, "far fa-envelope") : ""
    user.blog ? moldarInformations(user.blog, "fas fa-globe") : ""
    
    //My Projects
    for(let i = 0; i < 4; i++){
        
        let repositorio = repos[i]  
        
        moldarRepos(
            repositorio.name, 
            repositorio.description ? repositorio.description : "*Repositório sem descrição",
            repositorio.stargazers_count, "Master", 
            repositorio.language ? repositorio.language : "")
                
           
    }
    //Posts
    postAvatar.setAttribute('src', user.avatar_url)
} 

//Evento do botão de sair.
sair.addEventListener('click', () => {
    window.location.href = 'http://localhost:8080/'
})

preencherPerfil()

