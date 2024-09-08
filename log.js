//script para inicio de sesion

function log()
{

    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="D2J8" && pass=="B3M8")
    {
        window.location="/page/day.html";
    }
    else
    {
        alert("No puedes ingresar aqui")
    }
}