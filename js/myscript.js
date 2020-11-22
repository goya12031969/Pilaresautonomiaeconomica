function Alerta() {
    alert("¡Bienvenidas Mujeres Emprendedoras!");
}

function Confirmacion() {
    var txt;
    var r = confirm("¿Deseas saber acerca de Autonomía Económica de las Mujeres?");
    if (r == true) {
        txt = "Bienvenido al Programa Autonomía Económica";
    } else {
        txt = "Date la oportunidad de conocernos";
    }
    alert(txt);
}

function MyPrompt() {

    var Nombre = prompt("¿Cual es tu Nombre?", "Sin Nombre");
    var txt = "Hola mujer trabajdora" + Nombre + " te invito a desarrollar tus habilidades y creatividad en mujeres emprendedoras"
    alert(txt);
}

function HolaMundo() {
    var HolaMundo = "HOLA MUNDO SOY GOYITA";
    return document.getElementById("id1").innerHTML = HolaMundo;
}

function Suma(N1, N2) {
    var Suma = N1 + N2;
    return document.getElementById("id2").innerHTML = "La Suma de " + N1 + "+" + N2 + "=" + Suma;
}

function Mensaje() {
    console.log("SE VE EN LA CONSOLA");
}

function NumeroPar(Numero) {

    var txt;
    if (Numero % 2 == 0) {
        txt = "El " + Numero + " Es Par";
    } else {
        txt = "El " + Numero + " No es Par";
    }

    return document.getElementById("id3").innerHTML = txt;
}