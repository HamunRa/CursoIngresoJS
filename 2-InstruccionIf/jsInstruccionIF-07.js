/*
Lucas Soriano Baccarelli DIV E
IF Eje7
*/
function mostrar() {
	//declarar variable
	var edad;
	var estadoCivil;

	edad = parseInt(edad)

	//tomar el dato de la casilla
	edad = document.getElementById("txtIdEdad").value;

	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad <= 18 && estadoCivil != "Soltero") {
		alert("Es muy pequeño para NO ser soltero");
	}
}//FIN DE LA FUNCIÓN