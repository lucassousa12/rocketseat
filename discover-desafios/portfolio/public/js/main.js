import {pesquisaPerfil} from './apiGitHub.js'
import {validaInput, msgAlert} from './search.js'

let input = document.querySelector('#input')
const linkPerfil = document.querySelector('#linkPerfil')
const btnSearch = document.querySelector('#button')

let valido = false

//Evento que chama a função de validação.
input.addEventListener('keyup', () => {
     valido = validaInput(input.value)
})

//Evento que chama a função que faz a busca do usuário na API do GitGub.
btnSearch.addEventListener('click', () => {

    if(valido){
        pesquisaPerfil(input.value)    
    } else {
        msgAlert("Preencha o campo de forma correta antes de pesquisar.")
    }
    
})






