window.onload=iniciar;

function iniciar(){
    let elemento = document.getElementById("enviar");
    elemento.addEventListener("click", validar, false);
}

/*
Comprobar que el campo “nombre” no sea vacío.
Comprobar que el campo “teléfono” sea un número (da igual el formato).
Comprobar que los campos “día”, ”mes” y “ano” formen una fecha válida.
Comprobar que el checkbox de mayor de 18 años esté chequeado o no.
*/

function validacionNombre(){
    let nombre=document.getElementById("nombre");
    if (nombre.value="") {
        alert("Error, el campo está vacío");
        return false;
    }
    return true;
}

function validacionTelefono(){
    let telefono=document.getElementById("telefono");
    if (isNaN(telefono.value)) {
        alert("Error, no has introducido números");
        return false;
    }

    return true;
}

function validacionFecha(){
    let dia=document.getElementById("dia");
    let mes=document.getElementById("mes");
    let anyo=document.getElementById("ano");

    let fecha=new Date(anyo, mes, dia);
    if (isNaN(fecha)) {
        alert("Algún elemento de la fecha es incorrecto");
        return false;
    }

    return true;
}

function validacionMayor(){
    let mayor=document.getElementById("mayor");
    if (mayor.checked) {
        alert("Es mayor de edad");
        return false;
    }

    return true;
}

function validar(e){

    if (validacionNombre() && validacionTelefono() && validacionFecha() && validacionMayor()) {
        alert("Ya puede enviar el formulario sin problemas");
        return true;
    }else{
        e.preventDefault();
    }

}