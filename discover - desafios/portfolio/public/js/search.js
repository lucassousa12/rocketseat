const name = document.querySelector('#name')
const avatar = document.querySelector('#avatar')
const divResultados = document.querySelector('.resultados') 
const divMessage = document.querySelector('#message')

//Função que faz exibir a mensagem de alerta.
export function msgAlert(message) {
    divMessage.innerText = message
    divMessage.classList.add('ativo')

    setTimeout(() => {
        divMessage.classList.remove('ativo')
    }, 2000)
}

//Função que faz a validação do input de pesquisa.
export function validaInput (usuario) {
    if(usuario.length > 0) {
        return true
    } else {
        return false
    }
}

//Funcção que exibe na tela o resultado da pesquisa.
export function resultados() {
    let myStorage = window.localStorage
    const user = JSON.parse(myStorage.getItem('user'))

    divResultados.setAttribute('style', 'display: block;')
    name.innerHTML = user.name
    avatar.setAttribute('src', user.avatar_url)
}

