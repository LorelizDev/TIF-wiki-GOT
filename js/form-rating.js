//Validacion formulario de calificación
const formRate = document.getElementById('form-rating');
const aviso = document.getElementById('aviso')

formRate.addEventListener('submit', e=>{
    e.preventDefault() //evita el envío del formulario por defecto
    let check = false
    for (let i = 0; i < formRate.rate.length; i++) {
        if (formRate.rate[i].checked)
            check = true; //verifica si al menos un botón de calificación está seleccionado
    }
    if(!check){
        aviso.innerHTML = `Por favor, brinde una calificación.`
    } else {
        alert("¡Gracias por calificar nuestro contenido!"); //muestra alerta cuando el formulario es enviado
        formRate.submit(); //envía el formulario
    }
});