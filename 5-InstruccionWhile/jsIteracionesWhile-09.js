/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	var bandera;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	respuesta = 'si';
	bandera = 0; //bandera o flag
	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado > numeroMaximo || bandera == 0) {
			numeroMaximo = numeroIngresado;
		}
		if (numeroIngresado < numeroMinimo || bandera == 0) {
			numeroMinimo = numeroIngresado;
			bandera = 1;
		}

		respuesta = prompt("desea seguir ingresando numeros?si/no");
		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Error, desea seguir ingresando numeros?si/no");
		}
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN