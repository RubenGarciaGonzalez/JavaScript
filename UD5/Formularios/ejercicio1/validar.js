window.onload=iniciar;

function iniciar(){
    let elemento = document.getElementById("enviar");
    elemento.addEventListener("click", validar);
}

/*
Comprobar que el campo “nombre” no sea vacío.
Comprobar que el campo “teléfono” sea un número (da igual el formato).
Comprobar que los campos “día”, ”mes” y “ano” formen una fecha válida.
Comprobar que el checkbox de mayor de 18 años esté chequeado o no.
*/

function validar(){

    let nombre= document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;
    let mayor = document.getElementById("mayor").checked;

    if (nombre == null || nombre.length == 0 ) {
        alert("Error al validar su nombre");
        return;
    }

    if (telefono == null || telefono != parseInt(telefono)) {
        alert("Error al validar su telefono");
        return;
    }

    if (dia == "" || mes == "" || ano == "") {
        alert("Error al validar su fecha de nacimiento, faltan datos");
        return;
    }

    if (dia<1 || dia>31) {
        alert("Dia invalido");
        return;
    }

    if (mes<1 || mes>12) {
        alert("Mes invalido");
        return;
    }

    if (ano<1900 || ano>2019) {
        alert("Año invalido");
        return;
    }

    if (mayor) {
        alert("Es mayor de edad");
        return;
    }



}