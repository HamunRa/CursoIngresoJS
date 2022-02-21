/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt(numeroIngresado)

	while (numeroIngresado >= 1 && numeroIngresado <= 9) {
		numeroIngresado= prompt("Error, debe ingresar un numero entre 0 y 9");
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN