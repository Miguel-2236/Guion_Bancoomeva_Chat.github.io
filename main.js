console.log('Hello Word')
//PARA COPIAR SALUDOS
function verificarRB1(){
    if(document.getElementById('saludo-1').checked){
        navigator.clipboard.writeText("¡Hola Bienvenido a nuestro chat de WhatsApp Bancoomeva! Mi nombre es ____ y me encargaré de resolver tu solicitud, recuerda permanecer en el chat para agilizar la atención.")
    }
    if(document.getElementById('saludo-2').checked){
        navigator.clipboard.writeText("¡Hola! buen día, Bienvenido(a) a Bancoomeva, mi nombre es _________ y estoy encantado de ser tu asesor ¿Cómo puedo ayudarte el día de hoy?")
    }
}

//PARA COPIAR PREGUNTAS
function verificarRB2(){
    if(document.getElementById('pregunta-1').checked){
        navigator.clipboard.writeText("¿Qué ocupación tienes actualmente? (Empleado(a), Independiente, Pensionado)")
    }
    if(document.getElementById('pregunta-2').checked){
        navigator.clipboard.writeText("¿Tienes alguna otra duda o consulta en la cual pueda asesorarte?")
    }
}

//PARA COPIAR EN ESPERA
function verificarRB3(){
    if(document.getElementById('espera-1').checked){
        navigator.clipboard.writeText("Apreciado cliente no he recibido ninguna respuesta hasta el momento, ¿Continuas en línea?")
    }
    if(document.getElementById('espera-2').checked){
        navigator.clipboard.writeText("Apreciado cliente sigo sin recibir ninguna respuesta hasta el momento, por motivos de inactividad se dará por finalizado el chat, espero que tenga un excelente día, hasta pronto.")
    }
}

//PARA COPIAR DESPEDIDA
function verificarRB4(){
    if(document.getElementById('despedida-1').checked){
        navigator.clipboard.writeText("Para mí ha sido un gusto poder ayudarte el día de hoy, espero que tengas un excelente día, hasta pronto.")
    }
}