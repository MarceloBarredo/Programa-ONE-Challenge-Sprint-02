function validarCaracteres(test) {
    for (let i = 0; i < test.length; i++) {
        if (test.codePointAt(i) < 65 || test.codePointAt(i) > 90 ) {
            return false;
        } else {
            return true;
        } 
    }
}

function mensajesErrores(test) {
    
    var errores = [];

    if (test.length == 0) {
        errores.push("*La palabra debe tener algun caracter.");
    }
    if (test.length > 10) {
        errores.push("*La palabra no debe tener mas de 10 caracteres.");
    }
    if (validarCaracteres(test) == false) {
        errores.push("*No ingresar espacios ni caracteres especiales");
    }
    return errores;
}

function mostrarMensajesErrores (errores) {
        var ul = document.querySelector("#mensajes-errores");
        ul.innerHTML = "";
        errores.forEach(function (error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

function verificadorWin() {
    var prueba = document.querySelectorAll("#espacios-caracteres li");
    var contadorWin = 0;
    for (let i = 0; i < prueba.length; i++) {

        if (prueba[i].style.visibility == "visible") {
        contadorWin++;
        }
    }

    if (contadorWin == prueba.length && prueba.length != 0) {
        alertaGanaste ();
        return true;
    }
}

