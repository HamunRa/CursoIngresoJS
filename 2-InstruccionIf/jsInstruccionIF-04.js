/*
Lucas Soriano Baccarelli DIV E
IF Eje4
*/
function mostrar() {
	//declarar variable
	var edad;

	//tomar el dato de la casilla
	edad = document.getElementById("txtIdEdad").value;

	if (edad >= 13 && edad <= 17) {
		alert("Es un adolecente");
	}
}//FIN DE LA FUNCIÓN