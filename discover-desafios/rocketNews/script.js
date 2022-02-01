const btnSend = document.querySelector('#btn-send')
const input = document.querySelector('#email')
const storage = window.localStorage

btnSend.addEventListener('click', ()=> {

    if(input.value) {

        alert("Cadastrando o email")

        const emails = JSON.parse(storage.getItem('email') || '[]')
        emails.push(input.value)
        storage.setItem('email', JSON.stringify(emails))
    }    

})

