//Validacion formulario
const nombre = document.getElementById('name')
const email = document.getElementById('email')
const asunto = document.getElementById('subject')
const mensaje = document.getElementById('comentarios')
const form = document.getElementById('form')
const parrafo = document.getElementById('warnings')

form.addEventListener('submit', e=>{
    e.preventDefault()
    let warnings = ''
    let entrar = false
    parrafo.innerHTML = ''
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.value.length < 4){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(asunto.value.length < 4){
        warnings += `El asunto no es valido <br>`
        entrar = true
    }
    if(mensaje.value.length < 4){
        warnings += `El mensaje no es valido <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = 'Enviado'
    }
})