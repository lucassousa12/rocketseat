const timers = document.querySelectorAll('.timer')

const btnForm = document.querySelector('#btn-form')
const btnFechar = document.querySelector('#fechar')
const form = document.querySelector('#form')
const body = document.querySelector('main')

let dateFuturo = Date.parse('February 3, 2022')


//Realiza os calculos e formata os dias, horas, minutos e segundos.
function calcTemp(dateFututo) {

    let dateAtual = Date.now()
    let dateDiff = dateFuturo - dateAtual

    let days = Math.floor(dateDiff / (24 * 60 * 60 * 1000))
    let hours = Math.floor(dateDiff / (60 * 60 * 1000)) % 24
    let mins = Math.floor(dateDiff / (60 * 1000)) % 60
    let secs = Math.floor(dateDiff / (1000)) % 60

    
    days < 10 ? days =  "0" + days : days;
    hours < 10 ? hours = "0" + hours : hours;
    mins < 10 ? mins = "0" + mins : mins;
    secs < 10 ? secs = "0" + secs : secs;
    let total = [days, hours, mins, secs]

    return total
 
}

//Faz a mudança do tempo no html.
function setTime() {
    let total = calcTemp(dateFuturo)
    if (total) {
            timers.forEach((time, index) => {
            time.innerText = total[index] 
        }) 
    }
    
}


setTime()
setInterval(() => {
    setTime()
}, 1000)

//Botão de Inscreva-se, chama o formulário;
btnForm.addEventListener('click', () => {
    form.classList.add('ativo')
    body.classList.add('opacity')

})
//Botão de fechar o formulário.
btnFechar.addEventListener('click', () => {
    form.classList.remove('ativo')
    body.classList.remove('opacity')
})
