function mostrar() {
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			mensaje = "Hace frio, en verano varia la temperatura pero mayormente hace frio.";
			break;
		case "Cataratas":
			mensaje = "Hace calor.";
			break;
		case "Mardelplata":
			mensaje = "Hace calor.";
			break;
		case "Ushuaia":
			mensaje = "Hace mucho frio.";
			break;
			default: "Esos destinos no son validos."
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN