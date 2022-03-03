
function mostrar() {
    var ancho;
    var largo;
    var resultado;

    ancho = prompt("Ingrese el ancho ");
    ancho = parseInt(ancho);

    while (isNaN(ancho)) {
        ancho = prompt("Error, Ingrese el ancho ");
        ancho = parseInt(ancho);
    }

    largo = prompt("Ingrese el largo ");
    largo = parseInt(largo);

    while (isNaN(largo)) {
        largo = prompt("Error, Ingrese el largo ");
        largo = parseInt(largo);
    }

    resultado = parseInt(resultado);
    resultado = largo * 2 + ancho * 2;
    alert("El perimetro " + resultado);

}
