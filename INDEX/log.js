//script para inicio de sesion

function log()
{

    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="" && pass=="")
    {
        window.location="/page/day.html";
    }
    else
    {
        alert("Usuario no existe")
    }
}