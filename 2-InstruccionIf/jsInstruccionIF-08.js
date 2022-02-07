/*
Lucas Soriano Baccarelli DIV E
IF Eje8
*/function mostrar() {

	//declarar variables
	var edad;
	var estadoCivil;

	//Tomar los datos de las casillas
	edad = document.getElementById("txtIdEdad").value;

	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad >= 18 && estadoCivil == "Soltero") {
		alert("Es soltero y no es menor.");
	}
}//FIN DE LA FUNCIÓN