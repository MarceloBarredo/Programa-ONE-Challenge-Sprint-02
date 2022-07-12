var palabrasInicio = ["ORACLE","AZUCAR","VENTANA","BICICLETA","MADERA","VIDRIO","MARCELO","PARED"];
var botonAñadir = document.querySelector("#btn-añadir-palabra");
var botonComenzar = document.querySelector("#comenzar-juego");
var spanVidas = document.querySelector("#vidas");
var palabraRandom;
var vidas;

function agregarPalabra () {
    document.getElementById("input-agregar-palabra").style.display = "block";
    document.getElementById("btn-añadir-palabra").style.display = "block";
}

botonAñadir.addEventListener("click", function () {
    botonAñadir.blur();
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";

    var inputAñadir = document.querySelector("#input-agregar-palabra");
    var palabra = inputAñadir.value.toUpperCase();
    
    var errores = mensajesErrores(palabra);
    
    if (errores.length > 0) {
        mostrarMensajesErrores(errores);
        return;
    }

    palabrasInicio.push(palabra);
    palabraAgregada ();
});

botonComenzar.addEventListener("click", function () {
    botonComenzar.blur();
    vidas = 7;
    spanVidas.innerHTML = vidas;
    dibujarAhorcado(vidas);

    document.getElementById("span-utilizadas").style.visibility = "visible";
    document.getElementById("contador-vidas").style.visibility = "visible";
    document.getElementById("input-agregar-palabra").style.display = "none";
    document.getElementById("btn-añadir-palabra").style.display = "none";

    var numeroRandom = generarNumeroRandom();
    palabraRandom = palabrasInicio[numeroRandom];

    var ulCaracteres = document.querySelector("#espacios-caracteres");
    ulCaracteres.innerHTML = ""

    var ulGuiones = document.querySelector("#espacio-guiones");
    ulGuiones.innerHTML = ""

    var prueba = document.querySelector("#letras-utilizadas");
    prueba.innerHTML = "";

    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";

    for (let i = 0 ; i < palabraRandom.length ; i++) {
        var liCaracteres = document.createElement("li");
        liCaracteres.textContent = palabraRandom[i];
        ulCaracteres.appendChild(liCaracteres);

        var liGuiones = document.createElement("li");
        liGuiones.textContent = "-";
        ulGuiones.appendChild(liGuiones);
    }
});

function generarNumeroRandom () {
    var max = palabrasInicio.length - 1;
    return Math.round(Math.random()* max);
}

// Capturo el ingreso de caracteres.
document.addEventListener("keypress", function(elemento) {

    // Evita seguir jugando si ya perdiste o si ya ganaste.
    if (vidas == 0) {
        alertaPerdiste ()
        return;
    } else if (verificadorWin()==true){
        return;
    }


    if (document.getElementById("input-agregar-palabra").style.display == "none") {
        var caracter = elemento.key.toUpperCase();
        
        if (validarCaracteres(caracter) == true) {
            
            var prueba = document.querySelectorAll("#espacios-caracteres li");
            var contadorErrores = 0;

            for (let i = 0; i < prueba.length; i++) {

                if (prueba[i].textContent == caracter) {
                    prueba[i].style.visibility = "visible";
                } else {
                    contadorErrores++;
                    if (contadorErrores == prueba.length) {
                        vidas = vidas - 1;
                        spanVidas.innerHTML = vidas;
                        mostrarLetraUtilizada(caracter);
                    }
                }
            }
        }
        verificadorWin();
    }
})

function mostrarLetraUtilizada (letra) {

    var test = document.querySelectorAll("#letras-utilizadas li");

    if (test.length == 0) {
        var ul = document.querySelector("#letras-utilizadas");
        var li = document.createElement("li");
        li.textContent = letra;
        ul.appendChild(li);
    } else {
        var contadorLetras = 0
        for (let i = 0; i < test.length; i++) {
            if (test[i].textContent != letra) {
                contadorLetras++;
                if (contadorLetras == test.length) {
                var ul = document.querySelector("#letras-utilizadas");
                var li = document.createElement("li");
                li.textContent = letra;
                ul.appendChild(li);
                dibujarAhorcado(vidas);
                }
            } else {
                vidas++;
                spanVidas.innerHTML = vidas;
            }
        }
    }
    dibujarAhorcado(vidas);
}
