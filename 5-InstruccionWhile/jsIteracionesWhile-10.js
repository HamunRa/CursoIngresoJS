/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var acumuladorPositivo = 0;
	var acumuladorNegativo = 0;
	var acumuladorNumeroPar = 0;
	var ceros = 0;
	var promedioPositivo;
	var promedioNegativo;
	var negativos = 0;
	var positivos = 0;
	var bandera;
	var diferencia;

	bandera = 0;
	respuesta = "si";

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

		if (numeroIngresado > 0) {
			positivos = positivos + numeroIngresado;
			acumuladorPositivo++;
		} else if (numeroIngresado < 0) {
			negativos = negativos + numeroIngresado;
			acumuladorNegativo++;
		} else {
			ceros = ceros + 1;
		}
		if (numeroIngresado % 2 == 0) {
			acumuladorNumeroPar = acumuladorNumeroPar + 1;
		}
		respuesta = prompt("Desea seguir ingresando numeros? si/no ")
		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Error, desea seguir ingresando numeros?si/no");
		}
	}//fin del while
	promedioNegativo = negativos / acumuladorNegativo;
	promedioPositivo = positivos / acumuladorPositivo;
	diferencia = positivos - negativos;

	document.write("la suma de positivos es: " + positivos + "<br>");
	document.write("la suma de negativos es : " + negativos + "<br>");
	document.write("cantidad de positivos es : " + acumuladorPositivo + "<br>");
	document.write("cantidad de negativos es : " + acumuladorNegativo + "<br>");
	document.write("cantidad de ceros es: " + ceros + "<br>");
	document.write("cantidad de pares: " + acumuladorNumeroPar + "<br>");
	document.write("promedio de positivos: " + promedioPositivo + "<br>");
	document.write("promedio de negativos: " + promedioNegativo + "<br>");
	document.write("diferecia en postivos y negativos: " + diferencia + "<br>");
	document.write("El numero maximo es: " + numeroMaximo + "<br>")
	document.write("El numero minimo es: " + numeroMaximo + "<br>")

}//FIN DE LA FUNCIÓN