/*
Lucas Soriano Baccarelli DIV E
IF Eje10
*/
function mostrar() {
	//declarar variable
	var nota;

	//crear el numero random
	nota = Math.round(Math.random() * (10 - 1) + 1);

	if (nota > 8) {
		alert("Excelente, nota: " + nota)
	}
	else if (nota > 3) {
		alert("Aprobo, nota: " + nota)
	}
	else {
		alert("Vamos, la proxima se puede, nota: " + nota)
	}
}//FIN DE LA FUNCIÓN