// Funcionalidad del carrusel
const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto, i )=> {
    punto[i].addEventListener('click',()=>{
        let posicion = i
        let operacion = posicion * -25
        grande.style.transform = `translateX(${ operacion }%)`

        punto.forEach(( cadaPunto, i )=> {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})

//Validacion formulario
const nombre = document.getElementById('name')
const email = document.getElementById('email')
const asunto = document.getElementById('subject')
const mensaje = document.getElementById('message')
const form = document.getElementById('contact-form')
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
        alert("¡Gracias por contactarnos! Formulario enviado.");
        form.submit();
    }
})