function mostrar() {
    var precio;
    var descuento;
    var resultado;

    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
    descuento = prompt("Ingrese el descuento");
    descuento = parseInt(descuento);
    while (isNaN(precio)) {
        precio = prompt("Error, Ingrese el precio ");
        precio = parseInt(precio);
    }

    while (isNaN(descuento)) {
        descuento = prompt("Error, Ingrese el descuento ");
        descuento = parseInt(descuento);
    }

    resultado = precio * descuento /100;
    resultado = precio - resultado;
    resultado = parseInt(resultado);
    document.getElementById("elPrecioFinal").value = resultado;
}
