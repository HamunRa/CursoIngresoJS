/*
Lucas Soriano Baccarelli DIV E
Switch Eje2
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar() {
	//tomo el mes
	var mesDelAnio = document.getElementById("txtIdMes").value;
	var mensaje;

	switch (mesDelAnio) {
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			mensaje = "Ya pasamos el frio, ahora calor!!!";
			break;
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		default:
			mensaje = "Falta para el invierno";
	}
	alert(mensaje)
}//FIN DE LA FUNCIÓN