/*
Lucas Soriano Baccarelli DIV E
IF Eje10
*/
function mostrar() {
	//declarar variable
	var nota;
	var numeroMax;
	var numeroMin;

	//asignar los valores
	numeroMax = 10;
	numeroMin = 1;

	//crear el numero random
	nota = Math.round(Math.random() * (numeroMax - numeroMin) + numeroMin);

	if (nota >= 9) {
		alert("Excelente")
	}
	else if (nota >= 4) {
		alert("Aprobo")
	}
	else {
		alert("Vamos, la proxima se puede")
	}
}//FIN DE LA FUNCIÓN