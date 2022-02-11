/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar() {
	//tomo el mes
	var mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) {
		case value = "Julio", "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case value = "Marzo", "Abril", "Mayo", "Junio":
			alert("Falta para el invierno.");
			break;
		case value = "Septiembre", "Octubre", "Noviembre", "Diciembre", "Enero":
			alert("Ya pasamos el frio, ahora calor!!!.")
			break;
	}
}//FIN DE LA FUNCIÓN