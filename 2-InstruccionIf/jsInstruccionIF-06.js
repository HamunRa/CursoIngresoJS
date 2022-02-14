/*
Lucas Soriano Baccarelli DIV E
IF Eje6 bis
*/
function mostrar() {
	//declarar variable
	var edad;
	var mensaje;

	//tomar el dato de la casilla
	edad = prompt("ingrese su edad: ")


	if (edad > 69) {
		mensaje = "Es un anciano";
	}
	else {
		if (edad >= 18 && edad <= 69) {
			mensaje = "Es un adulto";
		}
		else {
			if (edad >= 13 && edad <= 17) {
				mensaje = "Es un adolecente";
			}
			else {
				if (edad <= 12 && edad >= 4) {
					mensaje = "Es un niño";
				}
				else {
					mensaje = "Es un bebe";
				}
			}
		}
	}
	document.getElementById("txtIdEdad").value = mensaje;
}//FIN DE LA FUNCIÓN
