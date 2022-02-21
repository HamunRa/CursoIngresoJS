/*
Lucas Soriano Baccarelli DIV E
Switch Eje10
*/
function mostrar() {
	var estacionIngresada;
	var destino;
	var mensaje;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
			}
			break;
		case "Verano":
			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja"
					break;
				default:
					mensaje = "No se viaja"
			}
			break;
		case "Otoño":
					mensaje = "Se viaja"
			break;
		case "Primavera":
			switch (destino) {
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "Se viaja"
					break;
				default:
					mensaje = "No se viaja"
			}
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN