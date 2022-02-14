/*
Lucas Soriano Baccarelli DIV E
Switch Eje1
al seleccionar un mes  informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar() {
	//tomo el mes
	var mesDelAnio = document.getElementById("txtIdMes").value;

	switch (mesDelAnio) {
		case value = "Enero":
			alert("Que comiences bien el año!!!.");
			break;
		case value = "Marzo":
			alert("A clases!!!.");
			break;
		case value = "Julio":
			alert("Se vienen las vacaciones!!!.")
			break;
		case value = "Diciembre":
			alert("Felices fiesta!!!.");
			break;
	}

}//FIN DE LA FUNCIÓN