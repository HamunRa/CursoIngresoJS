/*
Lucas Soriano Baccarelli DIV E
Switch Eje4
*/
function mostrar() {
	//tomo el mes
	var mesDelAnio = txtIdMes.value;
	var mensaje;

	switch (mesDelAnio) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Este mes tiene mas de 31 dias.";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene mas de 30 dias";
			break;
		default:
			mensaje = "Este mes tiene 28 dias";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN