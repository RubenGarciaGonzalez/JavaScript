let div = document.getElementById("demo");

document.getElementById("crearCookie").addEventListener('click', crearValoresCookie);
document.getElementById("borrarCookie").addEventListener('click', removeCookie);
document.getElementById("leerCookie").addEventListener("click",leerCookie);


function crearValoresCookie() {
    var nombre = prompt('Introduzca el nombre de la cookie');
    var valor = prompt('Introduzca su valor');
    var expiracion = prompt('Introduzca el número de días para que expire');
    setCookie(nombre, valor, expiracion);
}

function setCookie(nombre, valor, expiracion) {
    var date = new Date();
    date.setTime(date.getTime() + expiracion * 24 * 60 * 60 * 1000);
    var expiracion = "expires=" + date.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
    div.innerHTML += "Cookie creada! <br>";
}

function leerCookie(){
    var nombre = prompt("Introduzca el nombre de la cookie a consultar");
    var resultado = getCookie(nombre);
    div.innerHTML+="El valor de la cookie "+nombre+" es "+resultado+"<br>";
}

function getCookie(nombre){
    var nom = nombre+"=";
    var array = document.cookie.split(";");
    for (var i=0; i<array.length; i++){
        var c = array[i];
        while (c.charAt(0)==" "){ 
            c = c.substring(1);
        }
        if (c.indexOf(nombre)==0){
            return c.substring(nom.length, c.length);
        }
    }
    return "";
}

function removeCookie(){
    var nombre = prompt("Introduzca el nombre de la cookie a borrar");
    deleteCookie(nombre);
    div.innerHTML+="Cookie borrada!<br>";
}

function deleteCookie(nombre){
    setCookie(nombre,"",0);
}