const button = document.querySelector('button')
const username = document.getElementById('userName')
const password = document.getElementById('password')

button.addEventListener('click', function logarNoSite() {
    if (username.value == "wendel   " && password.value == "rosemery") {
        alert('Olá Wendel, Bem vindo de volta') 
    } else {
        alert('Erro na digitação')
    }
})

