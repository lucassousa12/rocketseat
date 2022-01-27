const btnMenu = document.querySelector('#menu')
const search = document.querySelector('#search input')
const searchBtn = document.querySelector('#search img')
const root = document.querySelector(':root')

function toggleMenu() {
    root.classList.toggle('ativo')
}

btnMenu.addEventListener('click', toggleMenu)

searchBtn.addEventListener('click', () => {
    if(sidebar.classList.contains('ativo')){
        alert('Pesquisando')
    }   else {
        toggleMenu() 
    }
    search.focus()
})
