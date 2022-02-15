/*
Lucas Soriano Baccarelli DIV E
Switch Eje9
*/
function mostrar() {
	var estacionIngresada;
	var destino;
	var precio;
	var aumento;
	var precioFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precio = 15000;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					aumento = 20 / 100;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = -10 / 100;
					break;
				case "Mar del plata":
					aumento = -20 / 100;
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					aumento = -20 / 100;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 10 / 100;
					break;
				case "Mar del plata":
					aumento = 20 / 100;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento = 10 / 100;
					break;
				case "Cordoba":
					aumento = 0;
			}
			break;
	}

	precioFinal = precio + (precio * aumento);

	alert("El precio final es: " + precioFinal);

}//FIN DE LA FUNCIÓN