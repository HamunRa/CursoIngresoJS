/*
Lucas Soriano Baccarelli DIV E
Switch Eje3
*/
function mostrar() {
	//tomo el mes
	var mesDelAnio = txtIdMes.value;
	var mensaje;

	switch (mesDelAnio) {
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;
		default:
			mensaje = "Este mes tiene 30 o más días";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN