function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	if (edad < 13 || edad > 17) {
		alert("No es un adolecente");
	}

}//FIN DE LA FUNCIÓN