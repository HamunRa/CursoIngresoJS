/*
Lucas Soriano Baccarelli DIV E
IF Eje6
*/
function mostrar()
{
	//declarar variable
	var edad;

	//tomar el dato de la casilla
	edad = document.getElementById("txtIdEdad").value;

		if (edad >= 18) {
			alert("Es un adulto");
		}
		else if(edad >= 13 && edad <= 17)
		{
			alert("Es un adolecente");
		}
		else
		{
			alert("Es un niño");
		}
}//FIN DE LA FUNCIÓN