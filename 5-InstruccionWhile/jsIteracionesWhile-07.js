/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador = 0;
	acumulador = 0;
	respuesta = 'si';

	while (respuesta == "si") {

		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		acumulador = acumulador + numeroIngresado;

		contador++;

		respuesta = prompt("Quiere ingresar otro numero? (si o no)");

		respuesta = respuesta.toLowerCase();

		while (!(respuesta == "si" || respuesta == "no"))
			respuesta = prompt("Error. Quiere ingresar otro numero? (si o no)")
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN