//Button Theme
const btnColor = document.querySelector('#btn-color')
const colorSpan = document.querySelector('#span-theme')
const html = document.querySelector('html')

let myStorage = window.localStorage


//verifica se a escolha de tema do usuário no localStorage
if(myStorage.getItem('dark') == 'on') {
    html.classList.add('dark')
    colorSpan.classList.add('dark')
} else {
     html.classList.remove('dark')
     colorSpan.classList.remove('dark')
}

//Evento do botão de tema.
btnColor.addEventListener("click", () => {
    colorSpan.classList.toggle('dark')

    //Chama as funções que trocam de tema e salva a escolha no local Storage.
    if(colorSpan.classList.contains('dark')) {
        myStorage.setItem('dark', 'on')
        html.classList.add('dark')
    } else {
        myStorage.setItem('dark', 'off')
        html.classList.remove('dark')
    }
})
