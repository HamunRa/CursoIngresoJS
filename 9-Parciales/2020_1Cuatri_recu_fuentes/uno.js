
function mostrar() {
	var respuesta;
	var edadChofer;
	var edadChoferJoven;
	var nombreChoferJoven;
	var nombreChofer;
	var nombreCliente;
	var zonas;
	var cantidadAceite;
	var contadorCABA = 0;
	var contadorBuenosAires = 0;
	var contadorGBA = 0;
	var banderaChoferJoven;
	var banderaAceite;
	var aceiteRecolectado;
	var mensaje;
	banderaAceite = 0;
	banderaChoferJoven = 0;

	respuesta = "si";

	while (respuesta == "si") {

		nombreChofer = prompt("Ingrese el nombre del chofer");

		edadChofer = prompt("Ingrese la edad del chofer");
		while (!(edadChofer >= 18)) {
			edadChofer = prompt("Error, ingrese una edad mayor a 18)");
		}

		zonas = prompt("Ingrese la zona (caba, buenos aires, gba)");
		zonas = zonas.toLowerCase();
		while (!(zonas == "caba" || zonas == "buenos aires" || zonas == "gba")) {
			zonas = prompt("Error, La zona debe ser (caba, Buenos Aires, gba)");
		}

		nombreCliente = prompt("Ingrese el nombre del cliente (McDonals, Rodicio, SigaAlaVaca)");
		while (!(nombreCliente == "McDonals" || nombreCliente == "Rodicio" || nombreCliente == "SigaAlaVaca")) {
			nombreCliente = prompt("Error, debe ingresar un nombre valido (McDonals, Rodicio, SigaAlaVaca)");
		}

		cantidadAceite = prompt("Ingrese la cantidad de aceite");
		while (!(cantidadAceite >= 800 && cantidadAceite <= 1500)) {
			cantidadAceite = prompt("Error, La cantidad de aceite debe estar entre 800 y 1500 litros");
		}

		edadChofer = parseInt(edadChofer);
		cantidadAceite = parseInt(cantidadAceite);

		switch (zonas) {
			case "caba":
				contadorCABA = contadorCABA + 1;
				break;
			case "buenos aires":
				contadorBuenosAires = contadorBuenosAires + 1;
				break;
			case "gba":
				contadorGBA = contadorGBA + 1;
				break;
		}

		if (edadChofer < edadChoferJoven || banderaChoferJoven == 0) {

			edadChoferJoven = edadChofer;
			nombreChoferJoven = nombreChofer;
			banderaChoferJoven = 1;

		}
		if (nombreCliente == "Rodicio" && (cantidadAceite > aceiteRecolectado || banderaAceite == 0)) {
			aceiteRecolectado = cantidadAceite;
			banderaAceite = 1;
		}



		respuesta = prompt("Desea seguir ingresando ? si/no ")
		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Error, desea seguir ingresando ?si/no");
		}
	}

	if (contadorCABA > contadorBuenosAires && contadorCABA > contadorGBA) {
		mensaje = "zona mas visitada es Caba";
	}
	else if (contadorGBA > contadorBuenosAires) {
		mensaje = "zona mas visitada GBA";
	}
	else {
		mensaje = "zona mas visitada Buenos Aires";
	}

	document.write(mensaje + "<br>");
	document.write("El nombre del chofer mas joven es: " + nombreChoferJoven + "<br>");
	document.write("La mayor cantidad de aceite recolectada en Rodicio es: " + aceiteRecolectado + "<br>");

}
