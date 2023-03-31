const button = document.getElementById('menu-button-mobile');
const btnSearch = document.getElementById('menu-btn-search');

// EVENTO DO MENU PRINCIPAL
function toggleMenu(event) {
    
    const header = document.getElementById('header');
    const active = header.classList.contains('active');

    if (event.type == 'touchstart') {
        event.preventDefault();
    }
    
    event.currentTarget.setAttribute('aria-expanded', active);


    header.classList.toggle('active');

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');	
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

button.addEventListener('click', toggleMenu);
button.addEventListener('touchstart', toggleMenu);     


// EVENTO DO BOTÃO DE PESQUISAR
function toggleSearch(event) {
    const header = document.getElementById('header');
    const active = header.classList.contains('active');
    
    const menuSearch = document.getElementById('menu-search');

    if (active === false) {
        menuSearch.classList.toggle('active');
   }

   if (event.type == 'touchstart') {
    event.preventDefault();
   }
    
}

btnSearch.addEventListener('click', toggleSearch);
btnSearch.addEventListener('touchstart', toggleSearch);