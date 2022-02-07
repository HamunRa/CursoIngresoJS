/*
Lucas Soriano Baccarelli DIV E
IF Eje3
*/
function mostrar() {
	//declarar variable
	var edad;

	//tomar el dato de la casilla
	edad = document.getElementById("txtIdEdad").value;

	if (edad >= 18) {
		alert("Es mayor de edad");
	}
	else {
		alert("Es menor de edad");
	}
}//FIN DE LA FUNCIÓN